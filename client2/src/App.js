import React from "react";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch , Routes  , Route} from "react-router-dom";

import ApolloProvider from "./ApolloProvider";
// import Route from "./PrivateRoute"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { AuthProvider } from "./context/auth";
import { MessageProvider } from "./context/message";

function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <MessageProvider>
          <BrowserRouter>
            <Container className="pt-5">
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/register" element={<Register/> } guest />
                <Route path="/login" element={<Login/> } guest />
              </Routes>
            </Container>
          </BrowserRouter>
        </MessageProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
