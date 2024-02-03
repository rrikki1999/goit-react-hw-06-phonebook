import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./actions";


const initialContactsState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
};

const initialFilterState = {
  filter: '',
};

export const contactsReducer = createReducer(initialContactsState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      return { ...state, contacts: [...state.contacts, action.payload] };
    })
    .addCase(deleteContact, (state, action) => {
      return {
                ...state,
                contacts: state.contacts.filter(
                  contact => contact.id !== action.payload
                ),
              };
    })
});

export const filtersReducer = createReducer(initialFilterState, builder => {
  builder.addCase(setFilter, (state, action) => {
    return { ...state, filter: action.payload };
  });
});

// const InitialState = {
//   contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
//   filter: '',
// };

// export const contactsReducer = (state = InitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case 'contacts/setFilter': {
//       return { ...state, filter: action.payload };
//     }

//     default:
//       return state;
//   }
// };


