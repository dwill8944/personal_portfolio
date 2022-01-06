import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Contacts from './components/contacts/Contacts';
import Navbar from './components/shared/Navbar';
import Skill from './components/shared/Skill' ;
// import Skill from './commponents/shared/Skill';
import ContactShow from './components/contacts/ContactShow';
import Project from './components/shared/Project';
import Work from './components/shared/Work';
import { Container } from 'react-bootstrap';

const App = () => (
  <>
  <Navbar />
  <Container>
  <Routes>
  <Route exact path='/' element={<Home />} />
  <Route exact path='/home' element={<Home />} />
  <Route exact path='/about' element={<About />} />
  <Route exact path='/contacts' element={<Contacts />} />
    <Route exact path='/contacts/:contactId' element ={<ContactShow />} />
       <Route exact path='/skill' element={<Skill />} />   
       <Route exact path='/project' element={<Project />} />
       <Route exact path='/work' element={<Work />} />
  <Route path='*' element={<NoMatch />} />
  </Routes>
  </Container>
  </>
)

export default App;
