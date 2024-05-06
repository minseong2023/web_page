import logo from './logo.svg';
import './App.css';
import './detail_css/card_news_details.css';
import './detail_css/post_details.css';
import { useState } from "react";
import post_data from './test_data/test_post';
import { Routes, Route, Link } from 'react-router-dom'

      
    

function App() {

  let [postData, setPostData] = useState(post_data)
  return (
    <div className="News">

      {/* 뉴스페이지 헤더 */}
      <header className="News-header">

        {/* 뉴스 헤더 바  */}
        <div className="News-header-bar">
        
          <div className="News_logo_div"><Link to="/"><img src="/news_image/logo_list/text_logo1.jpg" className="News-logo" /></Link></div>

          {/* 헤더 메뉴 부분 */}
          <div className="News-menu">
          <a href="#" className="News-menu-select" style={{ marginLeft: '10px' }}>동아리 소식</a><p className="News-menu_p_tag">|</p><a href="#" className="News-menu-select">보안 뉴스</a><p className="News-menu_p_tag">|</p><a href="#" className="News-menu-select">CTF 소식</a>
          </div>

          <div className="News_login_div">
            <button className="News_login_button">로그인</button>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<MainPage postData={postData} />} />
        <Route path="/cards" element={<div>카드페이지임</div>} />
        <Route path="/posts" element={<div>포스트페이지임</div>} />
      </Routes>
      {/* 뉴스 오른쪽 */}
      <div className="News-right"></div>

      {/* 뉴스 하단 */}
      <div className="News-footer"></div>


      
    </div>
  );
}

function MainPage({ postData }) {
  return (
    <>
      <div className="News-left"></div>
      <div className="News-center">
        <div className="News_card_container">
          <Link to="/cards"><input className='more_card' type="button" value="카드뉴스 더보기" /></Link>
          <Card_News postData={postData}/>
          <Card_News postData={postData}/>
          <Card_News postData={postData}/>
          <Card_News postData={postData}/>
        </div>
        <div className="News_post">
          <div className="News_post_search_container">
            <input className="News_post_search_bar" type="text" placeholder="검색..." />
            <Link to="/posts"><input className='more_post' type="button" value="게시글 더보기" /></Link>
          </div>
          <div className="News_post_box">
            <div className="News_post_box_classification" style={{borderBottom: '1px solid black'}}>
              <div className="News_post_content_number">NO</div>
              <div className="News_post_content_title">제목</div>
              <div className="News_post_content_writer">작성자</div>
              <div className="News__post_content_write_time">작성시간</div>
            </div>
            <Post postData={postData[postData.length - 1]}/>
            <Post postData={postData[postData.length - 2]}/>
            <Post postData={postData[postData.length - 3]}/>
            <Post postData={postData[postData.length - 4]}/>
          </div>
        </div>
      </div>
    </>
  );
}

function Card_News() {
  return (
    <div className="News_card_content">
      <div style={{ position: 'relative' }}>
        <div className="News_page_overlay"></div>
        <img src="/news_image/card_news/2024-04-08-17-34-33.jpg" alt="" />
      </div>
    </div>
  )
}

function Post(props) {
  return (
    <div className='News_post_box_division'>
      <div className="News_post_content_number">{props.postData.id}</div>
      <div className="News_post_content_title">{props.postData.title}</div>
      <div className="News_post_content_writer">{props.postData.writer}</div>
      <div className="News__post_content_write_time">{props.postData.time}</div>
    </div>
  );
}
export default App;
