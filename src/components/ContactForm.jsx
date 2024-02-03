import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';

import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   number: '',
  // });
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  // const onSubmitForm = (event) => {
  //   event.preventDefault();
  //   dispatch(addContact(formData.name, formData.number));
  //   resetForm();
  // };
  const onSubmitForm = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, number } = form.elements;
    dispatch(addContact(name.value, number.value));
    form.reset();
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNum = (e) => {
    setNumber(e.target.value);
  };

  // const resetForm = () => {
  //   setFormData({ name: '', number: '' });
  // };

  // const { name, number } = formData;

  return (
    <form className={styles.contactForm} onSubmit={onSubmitForm}>
      <label htmlFor={nanoid()} className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          required
        />
      </label>
      <label htmlFor={nanoid()} className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNum}
          required
        />
      </label>

      <button className={styles.addButton} type="submit">
        add contact
      </button>
    </form>
  );
};

export default ContactForm;

// import { nanoid } from 'nanoid';

// import styles from '../styles/ContactForm.module.css';
// import { useState } from 'react';


// const ContactForm = ({ addNewContact }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     number: '',
//   });
  

//   const onSubmitForm = (event) => {
//     event.preventDefault();
//     addNewContact(formData.name, formData.number);
//     resetForm();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const resetForm = () => {
//     setFormData({ name: '', number: '' });
//   };

//   const { name, number } = formData;

//   return (
//     <form className={styles.contactForm} onSubmit={onSubmitForm}>
//       <label htmlFor={nanoid()} className={styles.label}>
//         Name
//         <input
//           className={styles.input}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <label htmlFor={nanoid()} className={styles.label}>
//         Number
//         <input
//           className={styles.input}
//           type="tel"
//           name="number"
//           value={number}
//           onChange={handleChange}
//           required
//         />
//       </label>

//       <button className={styles.addButton} type="submit">
//         add contact
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

