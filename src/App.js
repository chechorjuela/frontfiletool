import {Provider} from "react-redux"
import store from './store'
import Container from 'react-bootstrap/Container';
import * as React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MyTable from "./screen/MyTable";
import SelectedFile from "./screen/SelectedFile";
import NavbarComponent from "./component/navbar/Navbar";

const App = () => {

  return (
    <>
      <NavbarComponent />

      <Provider store={store}>
        <Container fluid>
          <Router>
            <Routes>

              <Route path='/' element={<MyTable />}/>
              <Route path='/file/:name' element={<SelectedFile />}/>
            </Routes>
          </Router>
        </Container>
      </Provider>
    </>
  );
};
export default App;