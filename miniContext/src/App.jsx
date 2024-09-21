import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContextProvider from "./context/UsercontextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Learning Context Api...</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
