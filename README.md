# 1. React: Notes Component opendevpro

In this challenge, create a notes component in which a user can track notes, as shown below.

The component must have the following functionalities:

- There is an input box for 'Note title' in which the user can type the title of the note.

- There is an input box for 'Note status' in which the user can type the status. For example, 'active', 'complete', 'in progress', 'pending', or anything the user wants. (Status is case insensitive)

- Clicking on the button 'Add Note' will add the note to the component. After adding, the values in the input boxes are reset.

- Each node should be added inside the table `<tbody data-testif="noteList">` as an individual row. Note name and status should be added using `<tr><td>{name}</td><td>{status}</td></tr>`.

- **The app has 3 buttons that, when clicked, filter the notes from the list below:**

  - 'All' - This is the default selected button, and it displays all the notes addded by the user ('Active', 'Completed', and any other status as added by the user.)
  - 'Active' - Clicking on the displays only the notes having the status 'active'. **(In the order added by the user)**
  - 'Completed' - Clicking on this displays only the notes having the status 'completed'. **(In the order added by the user)**

- **When 'All' button is clicked, the notes displayed should be in the following order:**
  - **All notes that have the status 'active' (in the order added by the user)**
  - **All notes that have the status 'completed' (in the order added by the user)**
  - **All other notes in the order added by the user**

The following data-testid attributes are required in the component for the tests to pass:

- Title should have data-testid attribute 'app-title'.
- Name input should have data-testid attribute 'input-note-name'.
- Status input should have data-testid attribute 'input-note-status'.
- Add Note button should have data-testid attribute 'submit-button'.
- All button should have data-testid attribute 'allButton'.
- Active button should have data-testid attribute 'activeButton'.
- The table body `<tbody>` should have data-testid attribute 'noteList'.

Please note that component has above `data-testids` for test cases and some classes and ids for rendering purposes. It is advised not to change them.

### **Software Instructions**

The question(s) requires **Node 8 LTS or above**

- https://nodejs.org/en/download/

### **Git Instructions**

Use the following commands to work with this project

Run

```
npm start
```

Test

```
npm test
```

Install

```
npm install
```
