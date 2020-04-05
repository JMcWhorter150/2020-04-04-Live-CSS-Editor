/* global chrome */
import React, { useState } from 'react';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-chrome';

function App() {
  const [currentStyle, setCurrentStyle] = useState(``);
  const chromeTabsCSS = (input) => {
    chrome.tabs.insertCSS(null, {code: input})
    setCurrentStyle(input)
  }
  return (
    <div style={{minHeight: "200px", minWidth: "400px"}}>
      <AceEditor
      mode="css"
      theme='chrome'
      onChange={chromeTabsCSS}
      value={currentStyle}
      name="CSS-EDITOR"
      />
    </div>
  );
}

export default App;
