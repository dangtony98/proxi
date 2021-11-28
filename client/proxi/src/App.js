import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const LOCAL_PATH = 'http://localhost:3001/signup1';
const PUBLIC_PATH = 'https://evening-falls-10614.herokuapp.com/signup1';

function App() {
  const [email, setEmail] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState('');

  const onPress = (e) => {
    // signup pressed
    e.preventDefault();
    if (email.trim() != '') {
      // case: email is not empty
      axios.post(PUBLIC_PATH, {
        email
      })
      .then(function (response) {
        console.log('A');
        setError('');
        setEmail('');
        setIsComplete(true);
      })
      .catch(function (error) {
        console.log('B');
        setError('Oops something went wrong! Please try re-entering your email again.');
      });
    }
  }

  return (
    <div>
      <div className="home-heading">
        <h1 className="color-primary">Proxi</h1>
      </div>
      <div className="home-body flex center-h">
        <div className="home-body-area">
          <h2>We help small merchants get loans</h2>
          <p>
            Many merchants have little to no credit history but are in dire need of small business loans. 
          </p>
          <p className="marg-b-m">
            We help them avail small business loans by referring creditworthy, underbanked merchants to our extensive network of lending partners.
          </p>
          <p>
            Enter your email below to learn more
          </p>
          <form className="flex">
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="input flex-1 marg-r-xs"
              placeholder="josh@gmail.com"
              required
            />
            <button 
              className="button"
              onClick={onPress}
            >
              Sign up
            </button>
          </form>
          {isComplete && (
            <p>
              You're now on the waitlist! Someone on our team will reach out to you shortly.
            </p>
          )}
        </div>
        <div className="home-body-area">
          <img 
            src="https://images.unsplash.com/photo-1603039078583-13468e835b01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
            className="home-image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
