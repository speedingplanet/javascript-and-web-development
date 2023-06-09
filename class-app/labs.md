# Labs

## Lab 1: Warm-up

In the `labs` folder, create a file `greeter.html`.  
Add a `div` with an id that you can remember, like `output`.

Add an in-line `script` block which:

- Gets a reference to the div
- Changes its content to say "Hello _your name_"

Load greeter.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/greeter.html. Your port might be different, though

## Lab 2: Improvements and modules

Take the code in the in-line `script` block and move it to its own file: `greeter.js`.  

Reference the JavaScript file from the HTML file. Be sure to reference `greeter.js` as a module, not just a plain JavaScript file.

Re-verify that everything works. Make sure you view this through the web server, e.g.
http://localhost:5173/labs/greeter.html.

## Lab 3: Event handling

### HTML

Add a button to the page that says "Greet me".

If you want to style the button nicely, add the following tag somewhere in the `<head>` section of your HTML document:

```html
<link rel="stylesheet" href="/css/bootstrap.css" />
```

You can replace everything within the `body` (but **not** the `script` tag) with the following:

```html
<!-- Emmet: main.container>header.row>.col>h1 -->
<main class="container">
  <header class="row">
    <div class="col">
      <h1>Greeter Labs</h1>
    </div>
  </header>
  <!-- Emmet: .row>.col>button.btn.btn-primary -->
  <div class="row">
    <div class="col"><button class="btn btn-primary">Click me</button></div>
  </div>
  <!-- Emmet: .row>.col>#output -->
  <div class="row">
    <div class="col">
      <div id="output">
        <!-- Your output content goes here -->
      </div>
    </div>
  </div>
</main>
```

Check the [Bootstrap Documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/) for more details. Especially look at the [buttons documentation](https://getbootstrap.com/docs/5.2/components/buttons/)

### JavaScript

In your JavaScript file, comment out the code that greets you by name. Hook up an event handler to the button, so that when someone clicks on the button, they are greeted. You will have to hard-code the name for now.

You are, in essence, taking the code from the last exercise, and instead of running it when the page loads, running it when the user clicks on a button.

Load greeter.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/greeter.html. 

## Lab 4: Form input

We will add a single-line text field to the HTML, and then capture the content there to greet the user by their name.

### HTML

Add a single-line text field to your HTML file. Bootstrap has lots of information on [form controls](https://getbootstrap.com/docs/5.2/forms/form-control/). Here's an example of what you could use:

```html
<!-- Emmet: div>label.form-label+input:text.form-control#user-name -->
<div>
  <label for="user-name" class="form-label">Enter your name:</label>
  <input type="text" name="user-name" id="user-name" class="form-control" />
</div>
```

### JavaScript

Update the event handler on the button to grab the input from the text field. Then, use that information to render a customized greeting, using the user's name, rather than the previously hard-coded name.

## Lab 5: Fine-tuning our button

Our button should only be enabled when there is content in the form field.

In `greeter.js` add an event listener to the form field. (What's the name of the event we should use?) It should check the form field's value to see if there is any content there. If there is not, the button should be disabled. If there is, the button should be enabled.

Hint: The `value` property of the form field is a String. Strings have a `length` property. Is the `length` property present? Is it greater than 0? What's the best condition to use here?  

Load greeter.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/greeter.html. 

## Lab 6: More event handling

We will create a version of the greeter page that doesn't need a button to activate.

### HTML

Delete or comment out the button in the HTML.

### JavaScript

Comment out or delete all code which refers to the button. 

If you haven't already, add an event handler to the input field. When the user enters input, update the greeting with the input. That is, as the user types, the greeting reflects what the user is typing:

```
Hello, J
Hello, Jo
Hello, Joh
Hello, John
```

Load greeter.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/greeter.html. 

#### Improvements

Set up the event handler so that it does not render the greeting until the input is at least two characters long.

Update the event handler so that it displays a default greeting ("Hello!" "Greetings to you!" or similar). When the input reaches the minimum, replace the default greeting with the customized one.

## Lab 7: Rendering data to the page

New setup! Run `npm run set begin 7` before doing anything else.

Note that we now have something a little closer to a "site". 

We are going to render a list of students in `list-students.html`. The HTML is already set up for you, in `list-students.html`. The critical tag to pay attention to is the `div` with the id "output". 

### JavaScript

Working in `js/list-students.js`

- Import `students` from `../../data/all-data-typed.js`
- Write a function `buildTable`: 
  - It should take arguments of an array of students to render
  - It should return a HTML table where each row consists of
    - First Name
    - Last Name
    - City
    - Province
  - There's a quick HTML table reference below
- Call `buildTable` when the page loads, passing it the list of students
  you imported
- Then render the returned HTML table to the div with the ID output

#### HTML Table reference

```html
<table>
	<thead>
		<tr>
			<th>Column 1</th>
			<th>Column 2</th>
			<th>Column 3</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Row 1 Column 1</td>
			<td>Row 1 Column 2</td>
			<td>Row 1 Column 3</td>
		</tr>
		<tr>
			<td>Row 2 Column 1</td>
			<td>Row 2 Column 2</td>
			<td>Row 2 Column 3</td>
		</tr>
	</tbody>
</table>
```

Check to see if everything works! Load greeter.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/greeter.html. 

## Lab 8: Async

We will replace importing the data directly with fetching the data from a remote source.

- From a command prompt, make sure that you run `npm run rest`. This will
  start a server at http://localhost:8000. You can visit that address in your
  browser to test it.
- Remove the import of "students" from the top of the file
- Create a function `getData`. It should take an argument of a URL.
- In `getData`, use the `fetch` command to retrieve data from the supplied
  URL. You can assume the data will be in the right format (i.e., an array of student objects)
  - You can use async/await format
  - Or Promises
- Return the array of students/Promise of the array of students from `getData`
- In the main part of the script, add a function called `main` and make it `async`
- Move the code that was previously at the top level of the file inside `main`
  - This should be the call to `buildTable` and the code to get a reference to the output div
- Either using Promises or async/await, take the return value from `getData`
  and pass it to `buildTable` from the last lab.
- Render the table as you did before

Test your code and see if it works! Load greeter.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/greeter.html. 

## Lab 10: A full form

We will add a complete form to the page and grab the content from it to greet the user.

### HTML

We have an existing form at `add-student.html`. Take a minute to look at it now.

### JavaScript

Delete code that refers to the previous `#user-name` element. 

Create a `submit` event handler and attach it to the form.

- Turn off the default behavior (we don't actually want to submit the form)
- Capture the data from the form using a `FormData` object
- Use the data in the `FormData` object to build the greeting
- Render the greeting as usual

Load greeter.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/greeter.html. 

