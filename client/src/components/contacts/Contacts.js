import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import ContactList from './ContactList';


const Contacts = ({}) => {
    const [contacts, setContacts] = useState([])

    useEffect( () => {
        axios.get('/api/contacts')
        .then( res => {
            setContacts(res.data)
        })
        .catch( err => console.log(err))
    }, [])

    const addContact = (contact) => {
        axios.post('/api/contacts', { contact })
        .then( res => {
            setContacts([...contacts, res.data])
        })
        .catch( err => console.log(err))
    }

    const updateContact = (id, contact) => {
        axios.put(`/api/contacts/${id}`, { contact })
        .then( res => {
            const newUpdatedContacts = contacts.map( b => {
                if (b.id === id) {
                    return res.data
                }
                return b
            })
            setContacts(newUpdatedContacts)
        })
        .catch( err => console.log(err))
    }
   
    const deleteContact = (id) => {
        axios.delete(`/api/contacts/${id}`)
        .then( res => setContacts( contacts.filter( b => b.id !== id )))
        .catch( err => console.log(err))
    }

    return (
        <>
        <h1>Contact me</h1>
        <ContactForm addContact={addContact} />
        <ContactList contacts={contacts} 
        updateContact={updateContact}
        deleteContact={deleteContact} />
        </>
    )
}

export default Contacts;