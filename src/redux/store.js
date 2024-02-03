// Виконай рефакторинг коду застосунку «Книга контактів», 
// додавши управління станом за допомогою бібліотеки Redux Toolkit. 
// Нехай Redux-стан виглядає наступним чином.

// {
//   contacts: [],
//   filter: ""
// }

// Створи сховище з configureStore()
// Використовуй функцію createSlice()
// Створи дії збереження та видалення контакту, а також оновлення фільтра
// Зв'яжи React-компоненти з Redux-логікою за допомогою хуків бібліотеки react-redux.
// Використай бібліотеку Redux Persist для збереження масиву контактів у локальному сховищі

import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer, filtersReducer } from "./contactsReducer";
import contactsReducer from "./contactsSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
