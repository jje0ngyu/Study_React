import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

// styled-components의 장점
// 1 : CSS 파일을 만들지 않아도 된다.
// 2 : 스타일이 다른 js파일로 오염되지 않는다.
// 2-1 > 리액트는 코드 작성이 완료되면 파일을 하나로 합치는 작용을 하기 때문에
//     > CSS파일이 하나로 합쳐져 다른 코드들도 영향을 끼친다.
//     > 오염을 방지하려면... ' 컴포넌트.module.css ' 처럼 module 을 사용하면 된다.
// 3 : 페이지 로딩시간 단축


// 단점
// 1. JS파일이 매우 복잡해진다. (* 이 컴포넌트가 styled 인지 아니면 일반 컴포넌트인지 구분이 어렵다.)
// 2. 중복스타일은 컴포넌트간 import할텐데 CSS와 다를 바가 없다.
// 3. 협업 시 CSS담당의 숙련도 이슈가 있다.



// Lifecycle
// 페이지에 장착된다 (mount)
// 업데이트 된다 (update)
// 제거된다 (unmount)

/* 아래는 옛날 방식으로 작성된 코드

class Detatil2 extends React.Component {
  componentDidMount(){

  }
  componentDidUpdate(){

  }
  componentWillUnmount(){

  }
}
*/

function Detail(props){
  // useEffect 안에 이는 코드는 html 렌더링 후에 동작한다는 점이 특별하다.
  // > html을 먼저 보여주고 오래 걸리는 코드를 useEffect에 넣는 것도 방법이다!
  // > useEffect 안에 적는 코드 : 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머
  useEffect(()=>{
    // mount, update 시 코드 실행해줌
    console.log('안녕');
  })
  
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  

  // useEffect 동작 전에 실행되는 return()=>{}
  // clean up function은 mount시 실행안 됨 unmount시 실행된다.
  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) }, 2000)
    return ()=>{
      clearTimeout(a)
    }
  }, [count])

  let {id} = useParams();
  //let id = props.shoes[param].id;
  let findItem = props.shoes.find((x)=> x.id == id);
  //console.log(props.shoes.filter(shoe => shoe.id == param));
  
  let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
  `

  let Box = styled.div`
    background : grey;
    padding : 20px;
  `
  return(
    <div className="container">
      {
        alert == true
        ? <div className="aler alert-warning">2초 이내 구매 시 할인</div>
        : null
      }
      {count}
      <button onClick={()=>{ setCount(count+1) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
          <Box>
          <YellowBtn bg="blue">버튼</YellowBtn>
          </Box>
        </div>
      </div>
    </div> 
  )
}

export default Detail;