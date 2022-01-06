import { Link } from 'react-router-dom';
import ContactList from '../contacts/ContactList';
//   import { Navbar, Container } from 'react-bootstrap';

const Navbar = ({}) => {
    return (
        <>
          <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to= '/about'>
                    <li>About</li>
                </Link>
                <Link to ='/contacts'>
                    <li>Contacts</li>
                </Link>
                <Link to = '/skill'>
                    <li>Skills</li>
                
                </Link>
                <Link to ='/project'><li>Projects</li></Link>
                <Link to ='/work'><li>Work</li></Link>
            </ul>
        </nav>  

 {/* <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand > 
                <Link to='/'>
                    Home
                </Link></Navbar.Brand>
        <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <Link to ='/contacts'>
                    Contacts
                </Link>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>  */}
        </>
    )
}

export default Navbar;