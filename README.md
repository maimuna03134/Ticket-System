1. What is JSX, and why is it used?
Ans: 
💠 JSX: JSX stands for JavaScript XML. It is a syntax extension for JavaScript, primarily used with React to describe what the UI should look like.

💠 why is it used:
 
1. JSX allows developers to write HTML elements in JavaScript and place them in the DOM without using methods like "createElement()" or "appendChild()".
2. JSX seamlessly integrates with JavaScript expressions, allowing dynamic values and JavaScript logic to be embedded directly within the markup. This integration makes it easy to incorporate variables, expressions, and logic into the UI.
3. JSX helps prevent injection attacks by automatically escaping any values embedded within curly braces. This helps mitigate security risks associated with rendering user-generated content in the UI.
4. Allows embedding JavaScript expressions inside UI ({} syntax).

# Example: 

const element = <h1>Hello, React!</h1>;
const element = React.createElement("h1", null, "Hello, React!");

2. What is the difference between State and Props?
Ans: 
# Difference between State and Props:
💠 Props:
  🔸are immutable
    -which lets React do fast reference checks
  🔸are used to pass data down from your view-controller
    -your top level component 
  🔸have better performance
    -use this to pass data to child components
💠 State:
  🔸should be managed in your view-controller
    -your top level component
  🔸is mutable
  🔸has worse performance
  🔸should not be accessed from child components
    -pass it down with props instead

3. What is the useState hook, and how does it work?
Ans:
💠 useState hook: The useState hook is a fundamental feature in React that allows you to add state to functional components.

💠 how does it work:
useState adds state to functional components.
Returns [state, setState]; calling setState re-renders the component.
# Example:
import { useState } from 'react';
function MyComponent() {
 const [count, setCount] = useState(0);
 function handleClick() {
   setCount(count + 1);
 }
 return (
   <div>
     <p>You clicked {count} times</p>
     <button onClick={handleClick}>Click me</button>
   </div>
 );
}
4. How can you share state between components in React?
Ans:
🔶 Sharing State Between Components in React:

In React, sharing state between components is a common requirement. There are several ways to achieve this, including lifting state up to a common parent component and using the Context API.

▪️Lifting State Up:

Lifting state up involves moving the state to the closest common parent component and passing it down as props to the child components. This ensures that the state is managed in one place and can be shared between multiple components.

# Example: 

function Parent() {
  const [value, setValue] = useState("Hello");
  return <Child value={value} setValue={setValue} />;
}

▪️Using Context API:

The Context API provides a way to share state across multiple components without passing props manually at every level. This is useful for global state management or when components are deeply nested.

# Example: 

const MyContext = createContext();

5. How is event handling done in React?
Ans:
🔸Events in React are similar to DOM events but written in camelCase (e.g., onClick, onChange).

🔸Instead of strings, you pass a function reference.

# Example:

function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}


