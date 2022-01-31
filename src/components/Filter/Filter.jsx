import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

const Filter = ({ value, onChangeFilter }) => (
  <>
    <p>Find contacts by name</p>
    <input
      type="text"
      value={value}
      onChange={onChangeFilter}
      placeholder="Search..."
    ></input>
  </>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) =>
    dispatch(contactsActions.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
