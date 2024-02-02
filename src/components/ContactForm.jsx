// import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './ContactForm.module.css';
import { useState } from 'react';


const ContactForm = ({ addNewContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    addNewContact(formData.name, formData.number);
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: '', number: '' });
  };

  const { name, number } = formData;

  return (
    <form className={styles.contactForm} onSubmit={onSubmitForm}>
      <label htmlFor={nanoid()} className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
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
          onChange={handleChange}
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


// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   onSubmitForm = (event) => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     const { name, number } = form.elements;

//     this.props.addNewContact(name.value, number.value);
//     this.resetForm();
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={styles.contactForm} action="" onSubmit={this.onSubmitForm}>
//         <label htmlFor={nanoid()} className={styles.label}>
//           Name
//           <input
//             className={styles.input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//             required
//           />
//         </label>
//         <label htmlFor={nanoid()} className={styles.label}>
//           Number
//           <input
//             className={styles.input}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//             required
//           />
//         </label>

//         <button className={styles.addButton} type="submit">
//           add contact
//         </button>
//       </form>
//     );
//   }
// }
