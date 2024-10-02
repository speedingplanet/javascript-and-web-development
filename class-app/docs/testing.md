# Testing challenges

You could be developing in one (or more) of several different coding situations:

- Plain HTML + CSS + Vanilla JS
- Framework/using components
  - Dojo
  - React
  - Angular
  - AngularJS
  - Lit

For a framework, it's easy-ish to test a component in isolation

- Testing framework loads up component framework utilities
- Testing framework render the component
- Test component behavior
- Feel good about passing tests!

Using Vanilla JS and HTML we have a question for testing:

How do we test the combination of JS and HTML?

- Leave our code as part of a page
  - Unit testing is difficult-to-impossible
    - Or at least awkward as event handlers are extracted for testing
  - But integration testing is a lot easier
  - Reusability is lower
- Turn our code into component-like objects, particularly in JS
  - Unit testing is possible
  - Reusable
  - Relies on HTML existing in the document OR
  - Includes HTML to add to the document (which can be inefficient)
  - Have to set up an HTML environment for testing, which can be significant
