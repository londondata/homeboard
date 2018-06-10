## Homeboard Suggestions

### In `seed.js`:
- If you required the `models` folder you wouldn't need to rquire mongoose, Home or connect to mongoose in lines 5-11.
- You don't need to extract your test home creation into a function if that is all you are doing in this file.
- Exit the `.then()` and terminate execution  by calling `process.exit(0)`.

### In `server.js`:
- Do you need to include`mongoose`?
- You do not need to modify the `mongoose.Promise` if you are using an up-to-date version of mongoose
- Remove unused packages `ejs` & `expressLayouts`
- Convention recommends to place the routes usage below your middleware calls.
- Remove the TODO comments from production code.

### In `index.html`:
- Avoid mixing your script and link tags together.  Keeping them separate keeps them organized.
- Try to adapt a 2-space tabbing convention for indentation
- Remove unused or commented code from production
- Interesting choice for the date display. Close the tag with a `/>` instead of a `>`
- Why did you remove the footer?

### In `app.js`:
- Use spaces between `=`, `=>`, and `()` notation for easier readibility.
- Why is `greetFam()` not with the other functions?
- Avoid Switch/Case in web development. Fix indentation in your Switch/Case statement. Instead of having three append statements, set a variable `greetingTime` to 'Morning', 'Afternoon', 'Evening', etc. and then create a template string in the end. Less code bloat.
- Lines 42-46 is a lot. Try `new Date().toLocaleDateString()` and use a different tag than `<input type="date" />`
- Lines 61-67: What is your `#addHome` mouseover listener doing? Remove it from production if not in use.
- Line 82: Why are you creating this variable?
- Line 87: your success should never be `undefined`. That would be an error.  
- Line 96: Your error handler should alert the user to an error. Fix that weird indented curly brace.
- Line 113: fix weird indentation. What happens if there is an error retrieving a home?
- Line 129: fix this indentation. Is this method ever called? remove the event listener from the function call and it will be active.
- Line 157: Is this function ever called?
- The class `dltThisHome` doesn't exist in your html.  This would never trigger
- Line 181: fix indentation. This function is never actually called.
- Line 198-224: This code should be in your html file with `display: hidden` unitl needed. Also the form in the modal shouldn't have the action and method in it. Use JQuery to handle the request.
- Lines 271-421 should NOT be in your js file. Keep in it your html.  Adding a single id to this entire html blob doesn't justify keeping it in `app.js`

### In controllers:

#### `homeController.js`:
- You don't need to require `app` in this file.
- You don't need to require `router` in this file.
- - You don't need to require `express` in this file.
- Line 25: what is this variable for?
- If you are going to be using then/catch methods, don't use the callback on line 28.  
- Line 29: return a json response of the error so your front end can handle any error locating a single home.
- Line 44: If you set the default values of your Home to null in your models file you won't have to do all of these null assignments.
- You would save a lot of space if you called `db.Home.create(req.body).then().catch()` instead of creating a db object then saving.
- Line 65: You need to finish this for full funciionality.
- Line 69: Use `findOneAndUpdate()`
- Line 79: If you are going to be using then/catch methods, don't use the callback on line 79.

#### `userController.js` :
- You don't need to require `app` in this file.
- You don't need to require `router` in this file.
- - You don't need to require `express` in this file.
- Line 13 - Use `db.User.create()` instead. This is huge.
- Line 61 - What is this?
- Line 65 - Why are you redirecting? Is this a valid route?
-- Line 73: If you are going to be using then/catch methods, don't use the callback on line 73.

### In models:

#### `index.js`
- Why are you connecting to the database this way? What is the point of having a then function chained after your connection if you aren't going to have any action taken inside it?

#### `home.js`:
- A pet should have a `_home` reference instead of a home having an array of pet references.
- A chore should ahve a `_home` and `_user` reference to easily look up chores by home or user.  Also this would reduce the size of your home model.
- A user shouldn't have an array of chores as well as a home.
- Messages are unique to a home so they should be embedded not referenced.  

#### `msg.js`:
- add an `_author` attribute referencing the person who wrote this message.
- How will you differentiate between a msg and a response?
