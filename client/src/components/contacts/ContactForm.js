import {useState, useEffect } from 'react';


const ContactForm = ({ addContact, id, name, email, updateContact, setEdit, img }) => {
    const [contact, setContact] = useState({ name: '', email: '', img:''})

useEffect( () => {
    if (id) {
        setContact({ name, email, img})
    }
}, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updateContact(id, contact)
            setEdit(false)
        } else {
            addContact(contact)
        }
        
        setContact({ name: '', email: '', img:'' })
    
}

return (
    <>
    <form onSubmit={handleSubmit}>
        <input
        name='name'
        value={contact.name}
        onChange={(e) => setContact({...contact, name: e.target.value})}
        required
        placeholder="Name"
        />
         <label>Profile Image:</label>
        <input
        name='img'
        value={contact.img}
        onChange={(e) => setContact({...contact, img: e.target.value})}
        required
        
        />
         
        
        <textarea
        name="email"
        value={contact.email}
        onChange={(e) => setContact({...contact, email: e.target.value})}
        required
        placeholder="Email"
        ></textarea>
        <button type='submit'>Submit</button>
    </form>
    
    
    
    </>
)
}

export default ContactForm;