import React from 'react'
import logo from './logo.svg';

const Content = () => {
    const handleNameChange = () =>  {
        const names = ['ईश्वर', 'राम', 'श्याम', 'सीता', 'लक्ष्मण', 'रावण'];
        const num = Math.floor(Math.random() * 4);
        return names[num];
    }

  return (
    <main>
         <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>नमस्ते {handleNameChange()}</h3>
        {/* <p>
          Edit <code>src/App.js</code> and save to see changes.
        </p> */}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          सिक्ने हैन त रियाक्ट?
        </a>
      </div>
    </main>
  )
}

export default Content