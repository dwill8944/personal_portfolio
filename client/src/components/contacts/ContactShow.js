import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


const ContactShow = ({}) => {
const [contact, setContact] = useState({name:'', email: ''})
let params = useParams()

useEffect( () => {
    axios.get(`/api/contacts/${params.contactId}`)
    .then( res => {
        setContact(res.data)
    })
    .catch( err => console.log(err))
}, [])


    return (
        <>
        <h1>{contact.name}</h1>
        <p>{contact.email}</p>
        <p>{params.contactId}</p>
        </>
    )
}

export default ContactShow;