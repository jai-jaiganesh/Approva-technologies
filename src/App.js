import './App.css';
import { useState } from "react";




export default function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          const strArr = text.split(" ");
          const obj = {
            "realy": "really",
            "wierd":"weird"
          };
          const objArr = Object.getOwnPropertyNames(obj);
          strArr.map((d, i) => {
            const n = objArr.indexOf(d);
            if (n !== -1) {
              strArr[i] = obj[objArr[n]];
              setText(strArr.join(" ")+" ");
            }
            return true;
          });
        }}
      />
    </div>
  );
}
 
