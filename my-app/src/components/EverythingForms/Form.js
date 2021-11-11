import React, { useState } from "react";
//import Modal from "react-bootstrap/Modal";
import Axios from "axios";
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
  getCrypto = () => {
    // header("Access-Control-Allow-Origin", "http://localhost:8080");
    // Header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT");
    Axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        method: "GET",
        qs: {
          start: "1",
          limit: "10",
          convert: "USD",
        },
        headers: {
          "X-CMC_PRO_API_KEY": "57e0cad9-e1fd-4449-8834-dff39ba52a02",
        },
        json: true,
        gzip: true,
      }
    ).then((response) => {
      console.log(response);
      SubtleCrypto(response.data.id);
    });
  };

  render() {
    // const [crypto, setCrypto] = useState("");
    return (
      <div className="wrapper">
        <div>
          <h1>Crypto Investment Tracker</h1>
          <button onClick={this.getCrypto}>Add</button>
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
