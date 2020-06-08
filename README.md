## Running the project

First:
Run `$ npm install`

Then:
Run `$ npm start`

## Notes

### Cross-Browser

It this was asked, i probably would used postcss to generate that browser compatibility.

### File Structure

As the project is so small, i decided not to separate in different files what might have been different components, keeping all the layout in the same App file. (Otherwise a lot more time consumed separating files and doing everything more modular that the winnings on a project more "modular". Again, this is only because of the size of the project)

The public folder is where the react application goes to get files whenever it sees a request inside the html. For example "lanona.mp4", attach to the cideo tag, was placed here because of this.
Also the tracking.js file is placed here for the same reason. It's a creat-react-app (a command that react gives the devs to initialize [quickly] a react project) thing.

### Responsive design

The sizes, ratios, etc. used on the responsive design where only to show only an approach on how i do things. Do not take the design seriously please.

### Layout

The "X" columns structured was managed using flexbox, changing the width of the flex items on the media querys (for 1024 and 320 px).
The reason behind this (instead of a 2D layout such as grid) was to have more flexibility on the display of both parts which have columns (header + personal info containers - on top - & images containes - on bottom -). In this case, both parts share the same columns quantity (4, then 2 (1024px), then 1 (320px)) but in the future, the client might want to have different amount of columns for images and header so it could be easily modified.

### Video

I really didn't understand that much what it was asked to do with javascript in this section.
The initial render is there (with image) and when you clicked the image dissapeared and the video starts playing though.

### Note on tracking functionality

#### figerprint

The browser api used to store the fingerprint was the localStorage. I considered the localStorage as a better approach than the sessionStorage because the first one allows to mantain the fingerprint while visitating different pages .
The bad, as well with the sessionStorage, is that the fingerprint will be lost if the browser is closed (all of theirs tabs in case there are many open) so it should be persisted in a better way if someone wants to keep tracked of users.

#### Browsers tested for incognito

Only chrome and firefox.
