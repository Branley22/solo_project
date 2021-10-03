import {Router} from '@reach/router';
import Header from './components/Header';
import AllBooks from './components/AllBooks';
import CreateBook from './components/CreateBook';
import OneBook from './components/OneBook';
import './App.css';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <AllBooks default path='/books'/>
        <CreateBook path='/books/new'/>
        <OneBook path='/books/:id'/>
        <UpdateBook path='/books/edit/:id'/>
      </Router>
    </div>
  );
}

export default App;
