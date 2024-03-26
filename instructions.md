# Instructions

# Todos App - useContext

In this week's project, it's time to flex your muscles and build an application that pulls together all the parts of the Context API by building a to do app.

## Requirements

- Your app should list all tasks - completed or uncompleted.

- You should be able to mark an uncompleted task as complete (and change it back to uncompleted).

- You should be able to add and remove tasks.

- Your app should show a count of either all tasks or all uncompleted tasks (or both).

## Stretch goals

### Intermediate

- Add a timestamp for each task indicating when it was created. The timestamp should be displayed as a formatted date but stored as a raw date. You will be using the library [moment.js](https://www.npmjs.com/package/moment).

- Add a **complete all** button to set all tasks as completed. You could also use this opportunity to make your app look nice when there's no data. See [empty states UX design](https://www.toptal.com/designers/ux/empty-state-ux-design) for some ideas.

- Use styled components instead of vanilla CSS to do your styling.

### Advanced

- Add a date input to your new task form to set a due date on a task. It could be required, or optional - it's up to you. You could then display this in the list and style it differently when a task is overdue.

- Add filters to display completed/uncompleted tasks, tasks created after a given date or anything else you consider important.

- Create categories/tags for tasks so they can be grouped - for example, 'Housework', 'Shopping', etc.

- Create projects for tasks → A project could be a group of tasks which all need to be completed and when they are completed, the project is marked as complete.

## Getting started 🤓

In your to do app, you should be able to add tasks, list tasks and toggle whether a task is done or not.

You're free to style your to do list however you'd like, but try to keep it simple and clean - remember prospective employers will probably be interested to see this project!


### Hints and tips to complete the project

As always, start by sketching out how your app will look and what components you'll need. Break down the UI into smaller components.

Once you have your sketch, think about how the data in your store should look. What data does a task contain? Sketch it out and get it clear in your head. You'll need React for building components.

When starting to write your code, try to work on the project in small chunks rather than taking on too much at once. For example, you could start by making a new slice to store your tasks and use a hardcoded list of tasks to get up and running with.

Setup Context Provider: Create a context using createContext() and provide it using <Context.Provider> at the root of your app.

Create Todo Components: Develop components for listing todos, adding new todos, and any other features you plan to implement.

Manage State with Context: Use the useContext() hook within your components to access and update todo data provided by the context. Build your app incrementally, starting with basic functionality like listing todos and gradually adding more features.
With all that set up, you can now start creating components. For example, you could make a `TodoList` component that displays the list of todos and map over them, and a `TodoForm` to add your to-do to your global state.

Here is how you can wrap your application with the provider:

      // src/App.jsx
      import React from 'react';
      import TodoList from './TodoList';
      import TodoForm from './TodoForm';
      import { TodoProvider } from './TodoContext';

      const App = () => {
        return (
          <TodoProvider>
            <div>
              <h1>Todo App</h1>
              <TodoForm />
              <TodoList />
            </div>
          </TodoProvider>
        );
      };

      export default App;

Once you have your todos being listed, it's much easier to see actions you start creating working or not! A good next step is to implement some form of `addTask` action in the `tasks` reducer which will `push` a new task into the array of hardcoded tasks. You can then set up a form (keep using `useState` to control form elements and then pass the values into your actions on submit).

Another challenge will be giving your checkboxes and/or radio buttons a custom look. Feel free to check out [this video about custom checkboxes](https://www.youtube.com/watch?v=NfW_5Y1RZQ4) and [this video about custom radio buttons](https://www.youtube.com/watch?v=BT7FZooiqWw) to boost your knowledge!
