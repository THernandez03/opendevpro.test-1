import React, { Component } from "react";
import { ALL, ACTIVE, COMPLETED } from "../../constants/noteStatus";

import "./index.css";

let noteId = 0;

export default class NotesApp extends Component {
  state = {
    currentFilter: ALL,
    form: {},
    notes: {},
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleButtonClick = () => {
    const { form, notes } = this.state;
    const { title, status } = form;
    const id = ++noteId;

    this.setState({
      form: {},
      notes: { ...notes, [id]: { id, title, status } },
    });
  };

  handleFilterClick = (status) => (event) => {
    this.setState({ currentFilter: status });
  };

  render() {
    const { currentFilter, notes } = this.state;

    const filteredNotes = Object.values(notes).filter((note) => {
      if (currentFilter === ALL) return note;

      const status = note.status || "";
      return status.toLowerCase() === currentFilter;
    });

    const sortedNotes =
      currentFilter !== ALL
        ? filteredNotes
        : [
            ...filteredNotes.filter(
              ({ status = "" }) => status.toLowerCase() === ACTIVE
            ),
            ...filteredNotes.filter(
              ({ status = "" }) => status.toLowerCase() === COMPLETED
            ),
            ...filteredNotes.filter(({ status = "" }) => {
              const currentStatus = status.toLowerCase();
              return currentStatus !== ACTIVE && currentStatus !== COMPLETED;
            }),
          ];

    return (
      <div className="layout-column align-items-center justify-content-start">
        <section className="layout-row align-items-center justify-content-center mt-30">
          <input
            name="title"
            data-testid="input-note-name"
            type="text"
            value={this.state.form.title || ""}
            className="large mx-8"
            placeholder="Note Title"
            onChange={this.handleInputChange}
          />
          <input
            name="status"
            data-testid="input-note-status"
            type="text"
            value={this.state.form.status || ""}
            className="large mx-8"
            placeholder="Note Status"
            onChange={this.handleInputChange}
          />
          <button
            className=""
            data-testid="submit-button"
            onClick={this.handleButtonClick}
          >
            Add Note
          </button>
        </section>

        <div className="mt-50">
          <ul className="tabs">
            <li
              className="tab-item slide-up-fade-in"
              data-testid="allButton"
              data-status={ALL}
              onClick={this.handleFilterClick(ALL)}
            >
              All
            </li>
            <li
              className="tab-item slide-up-fade-in"
              data-testid="activeButton"
              data-status={ACTIVE}
              onClick={this.handleFilterClick(ACTIVE)}
            >
              Active
            </li>
            <li
              className="tab-item slide-up-fade-in"
              data-testid="completedButton"
              data-status={COMPLETED}
              onClick={this.handleFilterClick(COMPLETED)}
            >
              Completed
            </li>
          </ul>
        </div>
        <div className="card w-40 pt-30 pb-8">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody data-testid="noteList">
              {sortedNotes.map((note) => (
                <tr key={note.id}>
                  <td>{note.title}</td>
                  <td>{note.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
