// App.js
import React from "react";
import { AppContextProvider } from "./context/AppContext";
import UserList from "./components/UserList";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <UserList />
      </div>
    </AppContextProvider>
  );
}
// context/AppContext.js
// ... (previous code)

const reducer = (state, action) => {
  switch (action.type) {
    // ... (previous cases)

    case "SELECT_ALL_ROWS":
      return {
        ...state,
        selectedRows: action.payload,
      };

    case "DESELECT_ALL_ROWS":
      return {
        ...state,
        selectedRows: [],
      };

    // ... (previous cases)
  }
};

// ... (remaining code)

export default App;
