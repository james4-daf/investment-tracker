import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Form.css";

export class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");
  };

  render() {
    return (
      <div className="wrapper">
        <div>
          <h1>Crypto Investment Tracker</h1>
          <button type="submit">Add Transaction</button>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <label>
                <p>Choose a Crypto</p>
                <select name="crypto">
                  <option value="">--Choose an option--</option>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Etherium">Etherium</option>
                  <option value="Cardano">Cardano</option>
                </select>
              </label>
              <label>
                <p>Average Price</p>
                <input name="name" />
              </label>
              <label>
                <p># of Shares</p>
                <input name="name" />
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
