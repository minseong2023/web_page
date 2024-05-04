import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="News">

      {/* 뉴스페이지 헤더 */}
      <header className="News-header">
      
      {/* 뉴스 헤더 바  */}
      <div className="News-header-bar">
      
        <div className="News_logo_div"><img src="/news_image/logo_list/text_logo1.jpg" className="News-logo"></img></div>

        {/* 헤더 메뉴 부분 */}
        <div className="News-menu">
        <a href="#" className="News-menu-select" style={{ marginLeft: '10px' }}>동아리 소식</a><p className="News-menu_p_tag">|</p><a href="#" className="News-menu-select">보안 뉴스</a><p className="News-menu_p_tag">|</p><a href="#" className="News-menu-select">CTF 소식</a>
        </div>

        <div class="News_login_div">
          <button class="News_login_button">로그인</button>
        </div>
      </div>
      </header>

      {/* 뉴스 왼쪽  */}
      <div className="News-left"></div>

      {/* 뉴스 센터 */}
      <div className="News-center">
        
        {/* 카드 뉴스 구현 */}
        <div className="News_card_container">
          <div class="News_card_content">
          
            {/* 대표사진 선택하면 그 사진이 미리보기에 나오게 추후 수정 */}
            <div style={{position : 'relative'}}>
              <div className="News_page_overlay"></div>
              <img src="/news_image/card_news/2024-04-08-17-34-33.jpg" alt=""></img>
            </div>
          </div>

          <div className="News_card_content">
          
            {/* 대표사진 선택하면 그 사진이 미리보기에 나오게 추후 수정 */}
            <div style={{position : 'relative'}}>
              <div className="News_page_overlay"></div>
              <img src="/news_image/card_news/2024-04-08-17-34-33.jpg" alt=""></img>
            </div>
          </div>

          <div className="News_card_content">
          
            {/* 대표사진 선택하면 그 사진이 미리보기에 나오게 추후 수정 */}
            <div style={{position : 'relative'}}>
              <div className="News_page_overlay"></div>
              <img src="/news_image/card_news/2024-04-08-17-34-33.jpg" alt=""></img>
            </div>
          </div>

          <div className="News_card_content">
          
            {/* 대표사진 선택하면 그 사진이 미리보기에 나오게 추후 수정 */}
            <div style={{position : 'relative'}}>
              <div className="News_page_overlay"></div>
              <img src="/news_image/card_news/2024-04-08-17-34-33.jpg" alt=""></img>
            </div>
          </div>
        </div>

        {/* 뉴스 페이지 하단 게시글 div */}
        <div className="News_post" >
          <div style={{textAlign: 'center', paddingTop: '40px'}}>
            <input className="News_post_search_bar" type="text"></input>
          </div>

          {/* 게시글 */}
          <div className="News_post_box">
            <div className="News_post_box_classification" style={{borderBottom: '1px solid black'}}>
            
            {/* 게시글 번호 */}
            <div className="News_post_content_number">NO</div>
            
            {/* 게시글 제목 */}
            <div className="News_post_content_title">제목</div>
            
            {/* 게시글 작성자 */}
            <div className="News_post_content_writer">작성자</div>
            
            {/* 게시글 작성 시간 */}
            <div className="News__post_content_write_time">작성시간</div>
            </div>

            <div class="News_post_box_division"></div>

            <div class="News_post_box_division"></div>

            <div class="News_post_box_division"></div>

            <div class="News_post_box_division"></div>
          </div>
        </div>
      </div>
      
      {/* 뉴스 오른쪽 */}
      <div className="News-right"></div>

      {/* 뉴스 하단 */}
      <div className="News-footer"></div>



    </div>
  );
}

export default App;
