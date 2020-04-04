import React, {useState} from 'react';
import './App.css';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-chrome';

/* 
Goals:
1. Need to make a web page
2. Needs to have a web page explaining what it does
3. Need to have an editable section (inputs)
4. Needs to change the css of another div or full page

*/

function App() {
  const [style, setStyle] = useState('')
  return (
    <div className="App App-header">
      <h1>{style}</h1>
      <AceEditor
      mode="css"
      theme='chrome'
      onChange={setStyle}
      value={style}
      name="CSS-EDITOR"
      editorProps={{$blockScrolling: true}}
      />
    </div>
  );
}

export default App;
