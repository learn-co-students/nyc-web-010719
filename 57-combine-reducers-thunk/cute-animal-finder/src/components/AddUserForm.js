import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class AddUserForm extends Component {
  // this doesn't matter anywhere else
  state = {
    name: "",
    email: "",
    animalPreference: "cats", // By default, everyone loves cats! Mwahahahaha!
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addUser(this.state.name, this.state.email, this.state.animalPreference);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
        <label>Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></label>
        <label>
          Cats or Dogs?:
          <select name="animalPreference" value={this.state.animalPreference} onChange={this.handleChange}>
            <option value="cats">Cats</option>
            <option value="dogs">Dogs</option>
          </select>
        </label>
        <input type="submit" value="Add User" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (name, email, animalPreference) => dispatch(addUser(name, email, animalPreference))
  }
}

export default connect(null, mapDispatchToProps)(AddUserForm);
