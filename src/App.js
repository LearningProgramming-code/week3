// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [submit, setSubmit] = useState(0);
  const [eventArray, setEventArray] = useState([]);
  function handleSubmit(event, eventName) {
    event.preventDefault();
    setSubmit(submit + 1);
    setEventArray([...eventArray, eventName]);
    // setEventArray
  }
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/MyEvents' element={<MyEvents eventArray={ eventArray} />}  />
      <Route path='/Register' element={<Register submit={submit} handleSubmit={handleSubmit}/>} />
    </Routes>
  )
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <span> Event Handler </span>
        <Navbar/>
      </header>
      <main className = "App-main">
        <span>Welcome to Event Handler!</span>
      </main>  
      <Footer/>
    </div>
  );
}
function Navbar() {
  return (
    <navbar className = "navbar">
      <Link to = "/"> Home </Link>
      <Link to = "/MyEvents"> My Events </Link>
      <Link to = "/Register">  Register </Link>
    </navbar>
  );
}
function Footer() {
  return (
    <footer className="Footer">
      <span> Contact Us. © 2025 • All rights reserved • TL Summer School</span>
    </footer>
  );
}
function MyEvents({ eventArray }) {
    
  return (
    <div className="Events">
      <header className="App-header">
        <span> Event Handler </span>
        <Navbar />
      </header>
      <main>
        {eventArray.map((element, index) => (<span>{element} : {index}</span>))}
      </main>
      <Footer/>
    </div>
  );
}

function Register({ submit, handleSubmit }) {
  const [eventName, setEventName] = useState("");
  const [EmailName, setEmailName] = useState("");
  const [AttendeeName, setAttendeeName] = useState("");
  return (
    <div className="Register">
      <header className="App-header">
        <span> Event Handler </span>
        <Navbar />
      </header>
      <main className="Register-body">
        <p>Register Your Events Here!</p>
        <form>
          <div className="form-fields">
            <label>Event Name: </label>
            <input
              value={eventName}
              onChange={(e) => {
                setEventName(e.target.value)
              }}
            ></input>
          </div>
          <div className="form-fields">
            <label>Attendee Name: </label>
            <input
              value={AttendeeName}
              onChange={(e) => {
                setAttendeeName(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-fields">
            <label>Email Address: </label>
            <input
              value={EmailName}
              onChange={(e) => {
                setEmailName(e.target.value);
              }}
            ></input>
          </div>
          <Button submit={submit} handleSubmit={handleSubmit} eventName = {eventName} />
        </form>
        <button
          onClick={() => {
            alert(`This is the ${eventName}, ${EmailName} , ${AttendeeName}`);
          }}
        >
          Hello
        </button>
      </main>
      <Footer />
    </div>
  );
} 
function Button({ submit, handleSubmit, eventName }) {
  return (
    <div className="submit-button">
      <button onClick={(e) => {handleSubmit(e,eventName)}}>
        Submit <p>Submitted {submit} times</p>
      </button>
    </div>
  );
}
export default App;
