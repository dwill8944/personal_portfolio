import { useState } from 'react';
import ContactForm from './ContactForm';
import { Image } from 'react-bootstrap';

const Contact = ({ id, name, email, updateContact, deleteContact, img }) => {
 const [editing, setEdit ] = useState(false)
    return (
        <>
        <h2>{name}</h2>
        <p>{email}</p>
        <img src={img} alt='profile image' thumbnail width="200px" />
        
        {
            editing ?
            <>s
            <ContactForm
            id={id}
            name={name}
            email={email}
            updateContact={updateContact}
            setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
            </>
            :
            <button onClick={() => setEdit(true)}>Edit</button>
        }
        
        <button onClick={ () => deleteContact(id) }>Delete</button>


        </>
    )
}

export default Contact;