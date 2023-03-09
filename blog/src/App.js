/* eslint-disable */
// Lint 끄는 기능
// 이후 아래에 나오는 모든 warnning 메시지를 안 볼 수 있음

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 자료를 잠깐 저장할 땐?
  // 1. 변수 (let/var/const) 2. state
  let post = '강남 우동 맛집'; // 실제 서버에서 가져온 데이터라 가정!
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);

  // 좋아요
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  // 모달창
  let [modal, setModal] = useState(false);

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
  1. 변수와 state의 차이점을 알아야 한다.
  > 일반 변수는 갑자기 변경되면 HTML 자동 변경 X
  > state는 HTML이 자동 재렌더링 !
  > 즉!!! 자주 변경될 것 같은 HTML 부분은 state로 만들면 된다!!!

  2. state 변경하는 법
  1) let [따봉] = useState(0); 일 경우
  - 등호로 변경금지 ! ex) onClick={ () => {따봉 = 따봉 + 1} }   => why? 1)재랜더링되지 않기 때문 2) 함수에는 등호를 잘 사용하지 않는다.
  - useState[작명1, 작명2] 

  3. state 변경함수 특징
    - 기존state == 신규state 경우ㅡ 변경하지 않는다. (*자원절약)
  */

  /* onClick={} 사용법!
  중괄호 안에는 함수이름을 넣어야한다.
  or 함수 만드는 문법을 바로 넣어도 된다. ex) onClick={ function(){console.log(1)} }
          람다식으로 작성하면 다음과 같다. ex) onClick={ () => {console.log(1)} }
  */

  /* (참고) array/object 다룰 때
  1. 원본은 보존하는 것이 좋다.
  - ex) 함수 안에 { 글제목[0] = '여자 코드 추천'; } 이렇게 작성하면...
  - 데이터가 영구적으로 수정되어 원본을 훼손하게 된다.

  2. let [글제목, 글제목변경] = useState('남자 코드 추천'); 일때...
    해결방법 1.
      let copy = [...글제목];
      copy[0] = '여자코트 추천';
      글제목변경(copy);
    이렇게 작성하면 원본 내용을 보존할 수 있다.

  3. array/object 특징
      - let arr = [1,2,3]; 가 있다고 치자
      - RAM에 [1,2,3] 이 저장되어 있고
      - let arr 은 [1,2,3] 이 어디에 있는지 위치만 저장한다.
      (심화) 이러한 원리 때문에 만약 arr[0] 의 값이 변경이 되어도 위치값은 변경되지 않아 State는 기존state가 다르다고 생각하지 않아 arr[0]에 변경된 값이 적용되지 않는다.
      - 즉, 변수1 == 변수2 비교해도 ture가 나온다.
      - 쉽게 정리하면, state가 array/object면 shallow copy(...)를 만들어서 수정하자.
  */

  /* map 함수
  1. 모든 array 자료에는 기본 함수로 .map(콜백함수)을 사용할 수 있다.
    * 콜백함수 : 소괄호() 안에 들어가 있는 함수
  2. array 자료 개수만큼 함수 안의 코드를 실행해준다. => [1,2,3].map(function(a){console.log(a)})
  3. 함수의 파라미터는 array 안에 있던 자료이다.
  4. return에 뭐 적으면 array로 담아준다.
    ex) [1,2,3].map(function(a){
      return '1233211'
    } => 주의. array가 3개 이므로 return 되는 '1233211'이 3번 반복되어 담긴다.
      => 결과. ['1233211', '1233211', '1233211']
  5. 파라미터를 2개 사용할 수 있다.
    ex) 글제목.map(function(a, i){    => 이때 a는 데이터, i는 0부터 1씩 증가하는 함수이다.
      return (
        <div>
          <h4>{ 글제목[i] }</h4> 
        </div>
      )
    })
  */

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <div>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      } }>클릭</button>
      </div>
         
      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{ setModal(!modal) }}>
                { 글제목[i] }
                <span onClick={()=>{
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍</span> {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
             
            </div>
          )
        })
      }
      {
        modal == true? <Modal/> : null
      }
    </div>  
  );
}
/* 컴포넌트 !!! 
  1.컴포넌트를 사용하면, 처음 보는 사람도 미래의 나도 이해하기 쉬워진다.
  2.어떤 걸 컴포넌트로 만들면 좋은가?
    1) 반복적인 html 축약할 때
    2) 큰 페이지들
    3) 자주 변경되는 것들

  3. 컴포넌트 단점 ★
    1. state 가져다 쓸 때 문제 생긴다.
      - A 함수에 있던 변수는 B 함수에서 맘대로 가져다 쓸 수 없음
*/

/* (참고) 컴포넌트 만드는 문법 2
컴포넌트 밖에 함수를 만들어 쓰기도 한다.
아래는 예시이다.

let Modal = ()=>{
  return (
    <div></div>
  )
}
const 변수로 만들기도 하는데, 이유는 실수로 동일한 함수명을 사용했을 때 덮어쓰여지는 걸 방지하기 위해!
*/

/* 동적인 UI 만드는 Step
  1. html css로 미리 디자인 완성
  2. UI의 현재 상태를 state로 저장
  3. state에 따라 UI가 어떻게 보일지 작성
    - return의 <div> 안에 작성하는 코드는 자바스크립트이기 때문에 if/for문 같은 자바 문법을 사용할 수 없다.
    - 삼항연산자(ternary operator)를 사용하면 된다. =>  { 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드 }
    - 비어있는 html용으로 null을 자주 사용한다.
*/
function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
