import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles.css";
import App from "./App";

import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
