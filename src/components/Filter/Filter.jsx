import React from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

const Filter = () => {
  const getFilter = (state) => state.contacts.filter;
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (e) =>
    dispatch(contactsActions.filterContact(e.target.value));

  return (
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
};
export default Filter;
