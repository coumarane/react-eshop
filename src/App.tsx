/* eslint-disable jsx-a11y/anchor-is-valid */
// App.tsx
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { SidePanel } from "./components/SidePanel";
import { AppRoutes } from "./AppRoutes";
import configureStore from "./store/configureStore";

function App() {
  const history = createBrowserHistory();

  const store = configureStore(history);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />

          <div className="container-fluid">
            <div className="row">
              <SidePanel />

              <main
                role="main"
                className="col-md-9 ml-sm-auto col-lg-10 px-md-4"
              >
                <AppRoutes />
              </main>
            </div>
          </div>

          <ToastContainer
            hideProgressBar={true}
            autoClose={1000}
            position={"top-right"}
          />
        </Router>
      </Provider>
    </>
  );
}

export default App;
