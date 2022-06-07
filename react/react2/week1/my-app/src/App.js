import "./App.css";
import { ContextProvider } from "./Components/DataContext";
import { UserSearch } from "./Components/UserSearch";
import { RenderUser } from "./Components/RenderUser";
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <UserSearch />
        <RenderUser />
      </ContextProvider>
    </div>
  );
}

export default App;
