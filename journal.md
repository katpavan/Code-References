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
