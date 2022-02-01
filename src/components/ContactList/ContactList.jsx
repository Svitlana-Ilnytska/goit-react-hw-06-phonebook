import React from "react";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import contactsActions from "../../redux/contacts/contacts-actions";

import css from "./ContactList.module.css";

const filterAllContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
  contact.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const items = useSelector((state) =>
    filterAllContacts(state.contacts.items, state.contacts.filter)
  );
  
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={css.wrapList}>
      {items.map((item) => (
        <li key={item.id} className={css.wrapItem}>
          <ContactItem
            {...item}
            onDeleteContact={() => onDeleteContact(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
