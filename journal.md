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


