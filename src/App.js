import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import LoginPage from './page/LoginPage';
/* import UserPage from './page/UserPage'; */
import Navbar from './component/Navbar';
import { useState, useEffect } from 'react';
import PrivateRoute from './route/PrivateRoute';



function App() {
  const [authenticate, setAuthenticate] = useState(false);

  /* 
    useEffect( () => {})
    - 인자로 함수를 받음 -> 콜백함수
    - Mount -> 화면에 첫 렌더링
    - Update --> 다시 렌더링
    - UnMount -> 화면에서 사라짐

    1)useEfeect( () {},[])
    -> 화면에 처음 렌더링될 때 실행 -> 빈배열값을 전달하면 화면에 첫 렌더링할 때만 실행

    2)useEfeect( () {},[value])
    --> value의 값이 바뀔 때마다 실행
  */
  useEffect(()=> {
    console.log(authenticate);
  },[authenticate])
  return (
    <Container>
        <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
        <Routes>
          <Route path='/' element={<ProductAll />} />
          {/* <Route path='/product/:id' element={<ProductDetail />} /> */}

          {/* privateRoute 설정 */}
          <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
          <Route path='/login' element={<LoginPage setAuthenticate={setAuthenticate} />} />
          {/* <Route path='/user' element={<UserPage />} /> */}
        </Routes>
    </Container>
  );
}

export default App;
