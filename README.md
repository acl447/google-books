# Google-Book-Search

Use this fun, helpful app to search the Google Play books library (https://play.google.com/store/books) and save book listings to your own list. Simply enter the title of a book in the search bar and click "Search". Click "View" underneath the book image to view the book listing on Google Play. Click "Save" to save the book listing to your "Saved" list. Click "Saved" in the navigation bar to view your list of saved books.

When cloning this app, be sure to run "npm i" to install all required npm packages.

Link to app deployed to Heroku: ""

Technologies used to make this app are the Google Books API, MongoDB, Mongoose, Node, Express, Nodemon, Axios, If-Env, Path, React, React-Router-DOM, JavaScript, Bootstrap and CSS. 

To make this app I began by creating a Model View Controller folder structure for my code. Then I created a MongoDB database and populated it running "npm run seed". I then coded my React pages on the front end and configured my routes to run between the database and the front-end. 

With the help of the Google API, the routes take Google Books data and display it for the user. When the user clicks "Save", the routes take the data of the saved book and add it to the database. Then the data is sent back to the front end so the user can see the book in his/her "Saved" list.

Have fun using this app!
