import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  /* 네비게이션 메뉴바 영역을 배열로 처리 -> 메뉴의 확장성 */
  const menuList = [
    "전체",
    "아우터",
    "드레스",
    "상의",
    "하의",
    "악세서리",
    "특가세일"
  ]

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login')
  }

  //리엑트에서는 인풋 요소의 읽어오는 값이 이벤트에 있음.
  const search = (e) => {
    //console.log('key press')
    if (e.key === "Enter") {
      //console.log("enter", e.key)
      //입력한 검색어를 읽어와야 함
      let keyword = e.target.value;
      //console.log(keyword)

      //url을 변경
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <span className="login-text">로그인</span>
      </div>
      <div className="logo">
        <Link to ='/'>
          <img src={require('../img/logo.png')} alt="로고" />
        </Link>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {
            menuList.map(
              (menu, idx) => <li key={idx}>{menu}</li>
            )
          }
        </ul>
        <div className="search-area">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" onKeyDown={(e) => search(e)}/>
        </div>
      </div>      
    </>
  )
}

export default Navbar
