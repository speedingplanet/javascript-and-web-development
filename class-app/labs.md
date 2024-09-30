# Labs

## Lab 1: Warm-up

From a command prompt, run `npm run setup begin 1`.

In the `labs` folder, open `greeter.html`.  
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

Check the [Bootstrap Documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/) for more details about the classes `container`, `row`, and `col`. Especially look at the [buttons documentation](https://getbootstrap.com/docs/5.2/components/buttons/)

### JavaScript

In your JavaScript file, comment out the code that greets you by name. Hook up an event handler to the button, so that when someone clicks on the button, they are greeted. You will have to hard-code the name for now.

You are, in essence, taking the code from the last exercise, and instead of running it when the page loads, running it when the user clicks on a button.

Load `greeter.html` into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/greeter.html.

## Lab 4: Form input

We will add a single-line text field to the HTML, and then capture the content there to greet the user by their name.

### HTML

Add a single-line text field to your HTML file. Bootstrap has lots of information on [form controls](https://getbootstrap.com/docs/5.2/forms/form-control/). Here's an example of what you could use:

```html
<!-- Emmet: div>label.form-label+input:text.form-control#user-name -->
<div>
	<label
		for="user-name"
		class="form-label"
	>
		Enter your name:
	</label>
	<input
		type="text"
		name="user-name"
		id="user-name"
		class="form-control"
	/>
</div>
```

### JavaScript

Update the event handler on the button to grab the input from the text field. Then, use that information to render a customized greeting, using the user's name, rather than the previously hard-coded name.

## Lab 5: Fine-tuning our button

Our button should only be enabled when there is content in the form field.

In `greeter.js` add an event listener to the form field. (What's the name of the event we should use?) It should check the form field's value to see if there is any content there. If there is not, the button should be disabled. If there is, the button should be enabled.

Hint: The `value` property of the form field is a String. Strings have a `length` property. Is the `length` property present? Is it greater than 0? What's the best condition to use here?

<<<<<<< HEAD
The button should be disabled at the time the page loads. You can do this in HTML (add the `disabled` attribute to the button) or in JavaScript. Your choice.

=======

> > > > > > > day-2
> > > > > > > Load greeter.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/greeter.html.

## Lab 6: Improve for testing

We should improve our code to make it easier to test. There are too many cases where our event handlers assume elements are available, making testing difficult.

- Move the assignments of the references to the "Say hello" button, the input text field, and the output div, to the top of `greeter.js`
- Change the event handler for the button (`clickHandler`) so that it takes references to the text field and the output div as arguments
- Change the assignment of `clickHandler` so that instead of a function reference, you call `clickHandler` with the appropriate arguments
- Change the event handler for the form field (`inputHandler`) so that it takes references to an event object and the "Say hello" button as arguments.
- Change the assignment of `inputHandler` so that instead of a function reference, you call `inputHandler` with the appropriate arguments
- `export` both `clickHandler` and `inputHandler` so that a test file can import them

## Lab 7: More event handling

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

You will have to refactor the arguments to `inputHandler` for this to work. Keep in mind that within the event handler, you can get a reference back to the input field via `event.target`.

Load greeter.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/greeter.html.

#### Improvements

Set up the event handler so that it does not render the greeting until the input is at least two characters long.

Update the event handler so that it displays a default greeting ("Hello!" "Greetings to you!" or similar). When the input reaches the minimum, replace the default greeting with the customized one.

## Lab 8: Rendering data to the page

New setup! Run `npm run setup begin 8` before doing anything else.

Note that we now have something a little closer to a "site".

We are going to render a list of students in `list-students.html`. The HTML is already set up for you, in `list-students.html`. The critical tag to pay attention to is the `div` with the id "output".

### JavaScript

Working in `js/list-students.js`

- Import `students` from `../../data/all-data-typed.js`
- Write a function `buildTable`:
  - It should take an argument of an array of students to render
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
			<th>First Name</th>
			<th>Last Name</th>
			<th>City</th>
			<th>State/Province</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>John</td>
			<td>Paxton</td>
			<td>Nutley</td>
			<td>NJ</td>
		</tr>
		<tr>
			<td>Peter</td>
			<td>Parker</td>
			<td>New York</td>
			<td>NY</td>
		</tr>
	</tbody>
</table>
```

Check to see if everything works! Load list-students.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/list-students.html.

## Lab 9: Async

We will replace importing the data directly with fetching the data from a remote source.

- From a command prompt, make sure that you run `npm run rest`. This will
  start a server at http://localhost:8000/students. You can visit that address in your
  browser to test it.
- Do all the work below in `js/list-students.js`
- Remove the import of "students" from the top of the file
- Create a function `getData`. It should take an argument of a URL.
- In `getData`, use the `fetch` command to retrieve data from http://localhost:8000/students. You can assume the data will be in the right format (i.e., an array of student objects)
  - You can use `async`/`await` format
  - Or Promises
- Return the array of students/Promise of the array of students from `getData`
- Take all of the top-level code from the last lab and put it in a function called `main`
- Label the `main` function making it `async`
- Either using Promises or async/await, take the return value from `getData`
  and pass it to `buildTable` from the last lab.
- Don't forget to invoke `main` as well!
- Render the table as you did before

Check to see if everything works! Load list-students.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/list-students.html.

## Lab 10: A full form

We will add a complete form to the page and grab the content from it to add a new student.

### HTML

We have an existing form at `add-student.html`. Take a minute to look at it now.

### JavaScript

You will create three functions: `addStudent`, `handleSubmit`, and `displayResults`. You will also make a minor update to `main`

#### `addStudent`

- Use `async/await` or Promises
- Passed a URL and a student object
- Configure a `fetch` call to send the student to the appropriate URL
  - Use the POST method
  - Set the Content-Type header correctly
  - Send the student as the body of the request
- If the response is acceptable, get the results and return them
- Otherwise send an error to the console

#### `handleSubmit`

The event handler for a form submission

- Turn off the default behavior (we don't actually want to submit the form)
- Capture the data from the form using a `FormData` object
- Use the data in the `FormData` object to build a student object
- Call `addStudent` passing it the student (and a URL!)
- Clear the form's contents
- Call `displayResults` with the results from `addStudent`

#### `displayResults`

Display a message in the div with the ID "output". The message should indicate that the student was added successfully. It should include at least the student's first and last names, as well as the ID generated by the API call.

#### `main`

Already written for you, mostly. You'll need to attach the `handleSubmit` event handler.

Check to see if everything works! Load add-students.html into your browser to see if it works. If you've started the dev server, it should be available at http://localhost:5173/labs/add-students.html.
