# Haunted House Locator
This is a NodeJS/Express app which makes use of Sequelize,Handlebars,MySQL and Google Maps and Places API to view haunted locations in Georgia.

![](/public/images/Capture.PNG)

### Overview
This app displays a Google Map with markers poiting to haunted locations in Goergia. When you click on a marker a window pops-up with location details and lore about the place.At the top right of page there is a search bar and a 'Search Within' box. Google's Autocomplete feature is embedded with search bar that will help you to search for an address.Then select 'Search within' value and click on 'Search'
button. Map will display all the locations within selected miles range.

You can also create bookmark for a location. Click on the 'Bookmark' option in Navbar. Bookmark page will display 'Add New Place' button.Add location details. Once bookmark is added a new card will be displayed on 'Home' page.On the card there is 'View Details' button. Click this button to read, edit or delete the bookmark

### Live Demo
This app is deployed on [Heroku](https://heroku.com) for live demo check [https://hounted-house-locator.herokuapp.com/](https://hounted-house-locator.herokuapp.com/)

### Technologies Used
* [Node JS](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Handlebars](https://handlebarsjs.com/) : Web Template Framework
* [Sequelize](https://sequelize.org/) : Node js ORM for MySQL database.
* jQuery
* [Google Maps and Places API](https://developers.google.com/places/web-service/intro)
* MySQL Database

### How to execute the app?
(1) Visit [console.developers.google.com](https://console.developers.google.com) generate a Google API key. Refer this [link](https://developers.google.com/maps/documentation/javascript/get-api-key) to get started.

(2) Include Google Maps Javascript API and Google Places API.

(3)  Clone this repository.

(4) Install the npm dependancies using command `npm install`

(5) Change directory to config. Update `config.json` with your MySQL credentials.Create database `bookmarksdb` using script `models\schema.sql`

(6) In your terminal save your Google API key in the environment variable 'YOUR_API_KEY'.

(7) Change directory to 'gt-project2group3' .Execute the web server using command 
    
    > `node server.js`
    
    Web server will run at port 3002. Visit http://localhost:3002 to view the app.
    
    




