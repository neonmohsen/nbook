import "bulmaswatch/superhero/bulmaswatch.min.css";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  return (
    <Provider store = {store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
}

export default App;
