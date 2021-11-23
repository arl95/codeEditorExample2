import React, { useEffect } from "react";
import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";


function App() {
  const textRef = React.useRef();
  const [code, setCode] = React.useState(
    ``
  );
  useEffect(() => {
    if (textRef.current) {
      const obj = new SelectionText(textRef.current);
      console.log("obj:", obj);
      var tarea = document.querySelector(".w-tc-editor-text");
      // tarea.select();
      var langJS = document.querySelector(".language-js");
      langJS.addEventListener("click",()=>{
        tarea.select();
      });
      // document.addEventListener();
    }
  }, []);
  return (
  
 <CodeEditor
      value={code}
      ref={textRef}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        backgroundColor: "lightgrey",
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        fontSize: 12,
        borderRadius: "10px"
      }}
    />
  );
}

export default App;
