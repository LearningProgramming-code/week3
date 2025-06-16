// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [submit, setSubmit] = useState(0);
  const [eventArray, setEventArray] = useState([]);
  function handleSubmit(event, eventName, AttendeeName, EmailName) {
    event.preventDefault();
    if (eventArray.length < 6) {
      if (eventName !== "" && AttendeeName !== "" && EmailName !== "" && EmailName.includes("@")) {
        setEventArray([...eventArray, [eventName, AttendeeName, EmailName]]);
        setSubmit(submit + 1);
        alert("Registered Successfully!");
      }
      else if (!EmailName.includes("@")) {
        alert("Provide a vaild Email Address");
      }
      else {
        alert("Please fill all the required details to register the event.")
      }
    }
    else {
      alert("you are NOT attending more than 6 events ✌️");
   } 
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
      <main className="Events-body">
        <span> Your Events are listed below :</span>
        <div className="card-wrapper">
          {(eventArray.length > 0 && 
            eventArray.map((element, index) => (
              <EventCard eventName={element[0]} index={index} AttendeeName={element[1]} EmailName={ element[2] } />
            ))
          ) || <h1 className = "noEvents">No events to display here!</h1>}
        </div>
      </main>
      <Footer />
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
          <Button submit={submit} handleSubmit={handleSubmit} eventName = {eventName} AttendeeName = {AttendeeName} EmailName = {EmailName} />
        </form>
      </main>
      <Footer />
    </div>
  );
} 
function Button({ submit, handleSubmit, eventName, AttendeeName, EmailName }) {
  return (
    <div className="submit-button">
      <button onClick={(e) => {handleSubmit(e,eventName,AttendeeName,EmailName)}}>
        Submit <p>Submitted {submit} times</p>
      </button>
    </div>
  );
}

function EventCard({ eventName, index, AttendeeName, EmailName }) {
  return (
    <div  className = "EventCard">
      <p>  {index + 1}. Registered for {eventName}</p>
      <p>Registration was done by {AttendeeName}</p>
      <p>Email used for registration : {EmailName}</p>
    </div>
  )
}

export default App;

