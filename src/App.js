import "./App.css";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

import Index from "./pages/Index";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
}

export default App;
