import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function List() {
  return (
    <div>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
}
function App() {

// 자료를 잠깐 저장할 땐?
// 1. 변수 (let/var/const) 2. state
let post = '강남 우동 맛집'; // 실제 서버에서 가져온 데이터라 가정!
let [글제목, b] = useState(['남자 코드 추천', '강남 우동맛집', '파이썬독학']);

/* (참고) Destructuring 문법
let num = [1, 2]; 
let a = num[0]; > a = 1
let c = num[1]; > c = 2

이걸 편하게 만드는 문법
let [a, c] = [1, 2];  > a=1, c=2 > 이것이 Destructuring문법

==>
let [글제목, b] = useState('남자 코드 추천');
useState('남자 코드 추천') 안에는 [?, ?] 이런 형태로 자료가 남는다.
*/

/* state문법은 언제 사용하나요?
변수와 state의 차이점을 알아야 한다.
> 일반 변수는 갑자기 변경되면 HTML 자동 변경 X
> state는 HTML이 자동 재렌더링 !
> 즉!!! 자주 변경될 것 같은 HTML 부분은 state로 만들면 된다!!!
*/

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      
     
    </div>
  );
}

export default App;
