
import { useRef } from "react";

function App()  {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Fill and Inspect for more...</h2>
      <input type="text" id="username" ref={username} />
      <br />
      <input type="text" id="pass
      word" ref={password} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default App;