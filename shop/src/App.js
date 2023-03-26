import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import data from './data.js';
import Detail from './routes/Detail.js';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/detail">상세</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>상세</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className="container">
              <div className="row">
                {
                  data.map((a,i)=>{
                    return <Shoe i={i} shoes={shoes[i]} key={i}/>
                  })
                }
              </div>
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과)=>{
                console.log(결과.data);
                console.log(shoes);
                let copy = [...shoes, ...결과.data];
                setShoes(copy);
              })
              .catch(()=>{
                console.log('실패함');
              })
            

            }}>버튼</button>
          </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버!</div>} />
          <Route path="location" element={<About/>} />
        </Route>

        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지!!</div>} />
      </Routes>

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

function About(){
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
