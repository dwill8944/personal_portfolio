import { Link } from 'react-router-dom';
 import Contact from './Contact';

const ContactList = ({ contacts, updateContact, deleteContact }) => {
    return (
        <>
        { contacts.map( b =>
        <>
         <Contact 
         {...b} 
          key={b.id} 
         updateContact={updateContact} 
         deleteContact={deleteContact}/> 
             <Link to={`/contacts/${b.id}`} key={b.id}>Show</Link> 
          <br />
          </>  
            )}
        
        </>
    )
}

export default ContactList;