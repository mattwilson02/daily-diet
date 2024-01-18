import { Provider } from "react-redux";
import { Routes } from "./routes";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
