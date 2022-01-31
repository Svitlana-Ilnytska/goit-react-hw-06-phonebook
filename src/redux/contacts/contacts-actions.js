import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: nanoid(),
    number,
    name,
  },
}));

const deleteContact = createAction("contacts/delete");

const filterContact = createAction("contacts/filter");

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, filterContact };
