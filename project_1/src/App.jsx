import { useCallback, useState } from "react";
import "./App.css";

function App() {
  // passsing valuse for the passoword generator

  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [passoword, setPassword] = useState("");

  // usecollback funtion rendering
  const passowordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    // eslint-disable-next-line no-unused-vars
    if (charAllowed) str += "!@#$%^&*()_+";
    // eslint-disable-next-line no-undef
    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
  

    </>
  );
}

export default App;
