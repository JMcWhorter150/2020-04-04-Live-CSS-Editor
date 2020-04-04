import React, { useState } from 'react';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-chrome';

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
      <style dangerouslySetInnerHTML={{
        __html: currentStyle
      }}>

      </style>
    </div>
  );
}

export default App;
