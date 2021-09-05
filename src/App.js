import logo from './logo.svg';
import './App.css';
import React, {useState, useRef} from 'react';

function App() {
  const questions = [{}]
  let num = 1;
  let [progressBar, setProgressBar] = useState('100');
  
  return (
    <div id="wrapper">
       <div class="quiz">
           <progress value={progressBar} max="100"></progress>
           <p>What is this?</p>
           <ol type="A">
               <li>This is the answer</li>
           </ol>
       </div>
    </div>
  );
}

export default App;
