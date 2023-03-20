import './App.css';
import { useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import data from './data.js';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          {
            data.map((a,i)=>{
              return(
                <Shoe i={i} shoes={shoes[i]} />
              )
            })
          }
        </div>
      </div> 
    </div>
  );
}

function Shoe(props){
  let shoes = props.shoes;
  let i = props.i;
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"  + (i+1) + ".jpg"} width="80%"/>
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>       
    </div>
  );
}

export default App;
