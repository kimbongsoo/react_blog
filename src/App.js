import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  
  // let [글제목, b] = useState('남자 코트 추천');
  // let [글제목1, b1] = useState('강남 우동맛집');
  // let [글제목2, b2] = useState('파이썬 독학');
  let[따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color: 'white', fontSize : '16px'}}>ReactBlog</h4>
        <span onClick={()=>{ let copy = [...글제목]; 글제목변경(copy.sort())}}>👆</span>
      </div>
      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1)}}>⭐</span> {따봉} 
            <span onClick={()=>{ let copy = [...글제목]; copy[0] = '여자 코트 추천'; 글제목변경(copy)}}>🙌</span>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return (
  <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
