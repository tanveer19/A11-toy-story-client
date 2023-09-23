import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-2xl bg-sky-600 p-2">
        Tell us the differences between uncontrolled and controlled components.
      </h2>
      <div className="text-xl bg-white p-2">
        Uncontrolled and controlled components are two different approaches to
        managing form inputs and their state in React. Main differences are:
        <p>
          State Management: The state of a controlled component is controlled by
          React. The parent component's callback functions are used by the
          component to supply the component with its initial value, update it
          with props, and notify it of changes. An uncontrolled component,
          instead of depending on React to handle the state, it uses the native
          form handling of the browser to retrieve the most recent data as
          required.
        </p>
        <br />
        <p>
          Data flow: Data flow through controlled components is unidirectional.
          The input value is controlled by the parent component by being passed
          down as a prop and being updated via event handlers. The parent
          component is notified if the value changes so that it can update its
          state or take other necessary actions. On the other hand, uncontrolled
          components have a two-way data flow. The parent component can access
          the data via a ref or other methods supplied by the component, but the
          component handles its own internal state.
        </p>
        <br />
        <p>
          Event handling: Through event handlers like onChange, controlled
          components respond to changes in user input by updating the value in
          the state. This enables doing other operations prior to modifying the
          state, such as formatting or validating data. Uncontrolled components
          often handle user input events like onBlur, onChange, or onSubmit
          using the browser's default behavior. When required, the component
          immediately pulls the current value from the DOM.
        </p>
        <br />
        <p>
          In conclusion, controlled components give form inputs additional
          flexibility and control by explicitly managing their state using props
          and event handlers. Uncontrolled components handle their own state and
          rely on the browser's native form handling. The degree of control
          required, the complexity of the form, and the particular application
          needs all influence which option is best.
        </p>
        <br />
      </div>
      <h2 className="text-2xl bg-sky-600 p-2">
        How to validate React props using PropTypes?
      </h2>
      <div className="text-xl bg-white p-2">
        <p>
          Step 1: Install PropTypes Make sure you have the prop-types package
          installed in your React project. If not, you can install it using npm
          : npm install prop-types <br />
          Step 2: Import PropTypes Import the PropTypes module into the
          component file where you want to validate props: import PropTypes from
          'prop-types';
          <br />
          Step 3: Define PropTypes Below your component's code, add a static
          propTypes object to define the prop types and their validation rules.{" "}
          <br />
          Step 4: Use the Component You can now use your component as usual.
          React will automatically validate the props based on the PropTypes you
          defined. If any prop fails the validation, a warning will be logged in
          the console.
        </p>
      </div>
      <h2 className="text-2xl bg-sky-600 p-2">
        Tell us the difference between nodejs and express js
      </h2>
      <div className="text-xl bg-white p-2">
        Node.js and Express.js are two popular technologies in the JavaScript
        ecosystem, but they serve different purposes.
        <br />
        Node.js: A runtime environment enables you to execute JavaScript code on
        the server-side. It offers a lightweight and effective event-driven,
        non-blocking I/O mechanism that makes it ideal for creating scalable
        network applications. The V8 JavaScript engine, which is also utilized
        by Google Chrome, is used by Node.js to run JavaScript code outside of a
        browser. <br />
        <br />
        Express.js : Express.js is a flexible and uncomplicated web application
        framework for Node.js. It offers a selection of features and resources
        to make the development of web apps and APIs simpler and more effective.
        Express.js, which is based on Node.js, makes it easier to handle HTTP
        requests, route data, integrate middleware, and more.
      </div>

      <h2 className="text-2xl bg-sky-600 p-2">
        What is a custom hook, and why will you create a custom hook?
      </h2>
      <div className="text-xl bg-white p-2">
        A JavaScript method called a "custom hook" in React enables you to share
        stateful functionality between components. In order to manage and
        organize code in React apps, custom hooks are a technique to extract and
        share common functionality.
        <br />
        In React, you might construct a custom hook for the following reasons:{" "}
        <br />
        Reusability: With the use of custom hooks, you can take common logic out
        of components and use it elsewhere. This encourages code reuse
        throughout your application and reduces code duplication. <br />
        Abstraction: A reusable function can be created by abstracting away
        complicated logic or side effects using custom hooks. Your components
        may become clearer and more focused on their own roles as a result.
        <br />
        Composition: By using smaller, reusable hooks, custom hooks can be
        coupled and assembled with other hooks and components to create
        complicated behavior.
        <br />
        State management: Individual hooks can contain state management and
        offer a simple interface for interacting with it. The process of
        managing and updating state in your components might be made simpler as
        a result.
        <br />
        Testing: Isolation testing of the logic is made simpler by custom hooks.
        Hooks are merely functions, so you can create unit tests that are
        especially for a custom hook to ensure that it behaves as you want it to
        without mounting a full component.
      </div>
    </div>
  );
};

export default Blog;
