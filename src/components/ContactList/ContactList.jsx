import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contacts-actions";

import css from "./ContactList.module.css";

const ContactList = ({ items, onDeleteContact }) => (
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

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const filterAllContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterAllContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
