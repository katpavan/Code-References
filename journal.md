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
- `GET` requests are sent through the url, which can be bookmarked and sent to multiple users.

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

