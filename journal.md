#### [Mark Down Syntax](https://www.markdownguide.org/basic-syntax/#code)

## 4/4/9
### Mapping Functions to HTML Elements
- When adding a function to an html element, the function will not be added if the elements arent loaded beforehand. to fix this, use document as such:

    `$(document).on('click', .className, function(){alert('hi')})`

### Using `this` with `()=>{}` (DON'T DO IT)
- When using "this" on an onclick, make sure to NOT use arrow functions.  arrow functions will lift the state of the function 1 scope higher, which will return the window instead of the html elemnt

### Body Parser
- Body-parser npm package allows us to parse the 'req.body' object
- This pertains only to `POST` requests.  Post requests are sent through the body, not the url.

### Using Post vs Get
- Using `POST` will not allow the user to continuously carry out an action mapped to that route
- `POST` requests are sent through the req.body object.  To read this obj server side, you need body parser.
- `GET` requests are sent through the url (it can be accessed from the browser), which can be bookmarked and sent to multiple users.
- By virtue of these properties, never use `GET` for routes that will alter or update the DB.
- `GET` should only be used to read the data

### [MethodOveride](https://www.npmjs.com/package/method-override)
- `PUT` and `DELETE` is not built into express.  This 'hard-codes' it in so we can use it.
- `POST` is changed in the server.js to `PUT` or `DELETE`
- Using ajax: 
    `url:'/actors-delete?_method=DELETE'`
    `url:'/actors-update?_method=PUT'`
- Please note that `PUT` and `DELETE` have both been built into express.  This is no longer needed.

### Using Forms instead of Ajax
- Forms are used when you dont want to use javascript
- If its a simple application, maybe extra js is not needed
- `action: URL?_method=PUT` and `method= POST`
- Use `res.redirect('/')` to allow the page to just reload


## 4/6/9
### EJS (Embedded JS)
- These templates allow you to mix the html and js together
- Linking html elements from separate html file allows elements to be reused on multiple pages.  Updating a file once will update on all the pages that uses it.
- This is an alternative to making ajax calls and displaying information to the page
- Integrating ejs into express:
    `app.set('view engine', ejs);`
- The `public` folder is still needed for images and links or serving a single page up front.  *But use EJS*
- `res.render(pages/animals',{data})` looks for a folder called `views` and look for a file named animals.

### Sessions
- This needs `cookie-parser` and `express-session`
- This allows a user to stay logged in for multiple pages
- Simlar to localStorage on the browser. 
- Syntax : `res.session.na`
- Restarting the server will dump all the sessions
- To manual dump session :
    `req.session.destroy()`

## 4/9/9
### Sessions
- the `req.session.na` object is basically an object that is global to the entire server.  This allows the object to be continously read by other routes.

### Prepared Statement
- using `?` in a SQL query and to keep the user from directly sending queries to the database

### bcrypt.js
-   `bcrypt.genSalt(10, function(err, salt) `
- creates a `salt` which is randomly generated characters
- the salt is then used to encrypt the raw password together
- `bcrypt.hash(req.params.password, salt, function(err, p_hash) { `

## 4/10/9
### Sending Data w/ Form and POST
- When sending sensitive data, make sure to use `POST` request instead of `GET`.  Post will be sent through the body object but get requests will be sent through the url.
- In the input of each data, specify a `name` attribute or else the information will not have a key in the object. Ex:
    - `<input name="emai">`

## 4/11/9

### File Path in Browser
- When referencing paths in the browser, the path will begin at the root of the folder.  Its is not needed to find the path out of the current folder.

## 4/13/9
### jQuery Attr
- When accessing the attr of a jquery element, you cannot use a variable because the attr. is not a function of a newly created variable
- For example: `var allIcons = $('.allIcons'), allIcons.attr('name')` will not work.
- Instead, dont use a variable at all and just call attr. directly from the jquery element

## 4/21/19

### Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems (Preview Edition)

* A data-intensive application is typically built from standard building blocks which prodive commonly needed functionality.  For example, many applications need to:

    * Store data so that they, or another application,  can find it again later (*databases*)

    * Remember the result of an expensive operation, to speed up reads (*caches*)

    * Allow users to search data by keyword or filter it in various ways (*search indexes*)

    * Send a message to another process, to be handled asynchronously (*stream processing*)

    * Periodically crunch a large amount of accumulated data (*batch processing*)

    * Notes notes notes


## 4/25/19

### Basics of MongoDB

* Reporting is much much easier to do with MySQL.  Don't use MongoDB for reporting.  DONT!

* Enterprise software would not be using a NoSQL database.  There are just too many relationships.

* If you have to WRITE lots of data, web scraping, less structure use MongoDB.

## 4/27/19

### Cherio

* Uses jquery on the backend to efficiently scrape data from html
        - Only works if the data is loaded WITH the html, not AFTER
        - This will work for any site before 2009

### Nightmare

* Same as Cherio but it will work on pages made with data loaded AFTER html


## 4/28/19
### ASCII vs Unicode

* ASCII defines 128 characters, which maps to the numbers 0-127.  It uses 7-bits to define a characters.  

    - Not 8 because back then, the last bit was used to avoid error as parity bits

* Unicode defines around 2^21 characters, which maps to the numbers 2^21

* ASCII was created with the english language in mind.  Unicode has essentially all the letters of other languages defined by the Unicode numbers.  This means that ASCII is a subset of Unicode.

* Here is a great explanation of it [unicode-vs-ascii](https://stackoverflow.com/questions/19212306/whats-the-difference-between-ascii-and-unicode)


## 4/29/19

* A good way to set up the database of a social network application is by using graphs.  Graphs is a data structure that consists of nodes and edges, similar to trees and linked lists.

* By using BFS, you can find the shortest path between you and another user.

*