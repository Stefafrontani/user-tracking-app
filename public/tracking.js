window.addEventListener("load", () => {
  const userAgent = navigator.userAgent;
  const referrer = document.referrer;
  let fingerprint;
  const cacheFingerprint = localStorage.getItem("fingerprint");

  if (cacheFingerprint) {
    // Get from localstorage
    fingerprint = cacheFingerprint;
  } else {
    // Otherwise, create the fingerprint and save it on the browser
    fingerprint = Math.random().toString(36);
    localStorage.setItem("fingerprint", fingerprint);
  }

  isPrivateMode().then((isIncognito) => {
    console.log("isIncognito : ", isIncognito);
    const body = {
      userAgent,
      referrer,
      isIncognito,
      fingerprint,
    };

    axios
      .post("apiServiceHere", body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

function isPrivateMode() {
  return new Promise(function detect(resolve) {
    const yes = function () {
      resolve(true);
    }; // is in private mode
    const not = function () {
      resolve(false);
    }; // not in private mode

    function detectChrome() {
      // Chrome gives less than 100 megabytes on quota limit when in private navigation
      // Sources:
      // https://developers.google.com/web/updates/2017/08/estimating-available-storage-space
      // https://developers.google.com/web/tools/workbox/guides/storage-quota
      const isChrome = /(?=.*(chrome)).*/i.test(navigator.userAgent);
      if (isChrome) {
        navigator.storage.estimate().then(function (data) {
          console.log("data.quota");
          console.log(data.quota);
          // The quota gave by the browser in default navitagion vs private one : 303799937433 / 107171719 [in bytes] === 300 gb / 0.1 gb
          return data.quota < 150000000 ? yes() : not(); // In bytes, should be less thatn 100 megabyes = 100 000 000 bytes. We use 150 000 000 , to prevent misscalculations
        });
      }
      return !!isChrome;
    }

    function detectFirefox() {
      // Quoute: 'as of April 2020 so you can't use IndexedDB in Firefox Private Browsing at all. The api is available, but can not open an instance'
      // Source:
      // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
      const isMozillaFirefox =
        "MozAppearance" in document.documentElement.style;
      if (isMozillaFirefox) {
        // Ask for "permission" to use indexedDB, the response will trigger an event of success in case it opens succesfully. When in private browsing, onerror is getting trigered
        const db = indexedDB.open("inPrivate");
        db.onsuccess = not;
        db.onerror = yes;
      }
      return isMozillaFirefox;
    }

    // when a browser is detected, it runs the assertions for that browser and skips testing other browsers.
    if (detectChrome()) return;
    if (detectFirefox()) return;

    // default navigation mode (Not every browser tested, so resolved to not private navigation anyways)
    return not();
  });
}
