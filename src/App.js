import React, { useState } from 'react';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-chrome';

import { Style } from 'react-style-tag';

function App() {
  const [currentStyle, setCurrentStyle] = useState(``)
  return (
    <div style={{minHeight: "200px", minWidth: "400px"}}>
      <AceEditor
      mode="css"
      theme='chrome'
      onChange={setCurrentStyle}
      value={currentStyle}
      name="CSS-EDITOR"
      />
      <Style>
        {currentStyle}
      </Style>
    </div>
  );
}

export default App;
