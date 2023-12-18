//검색창 띄우기 script
/*검색버튼 클릭했을 때, 모바일 메뉴는 나타나고 메뉴랩은 왼쪽으로 사라지고 서치랩은 왼쪽에서 오른쪽으로 나타남 */

//document = HTML에서 불러오는 것

let Search = document.querySelector(".s_click");
let MobileMenu = document.querySelector(".mobile_menu");
let MenuWrap = document.querySelector(".menu_wrap");
let SearchWrap = document.querySelector(".search_wrap");
let MobileSearch = document.querySelector(".m_click")

function SearchClick(){
  MenuWrap.style.left="-400px";
  SearchWrap.style.left="106px";
  LikeWrap.style.left="-400px";
}

Search.addEventListener('click', SearchClick);

/* 모바일 랩의 서치를 클릭했을 때, 서치 랩은 왼쪽으로 사라지고 메뉴랩이 왼쪽에서 오른쪽으로 나타난다 */


function MobileClick(){
  SearchWrap.style.left="-400px";
  MenuWrap.style.left="0";
  LikeWrap.style.left="-400px";
}
MobileSearch.addEventListener('click', MobileClick);

  // 알림띄우기 
  let Like = document.querySelector(".l_click")
  let LikeWrap = document.querySelector(".like_wrap")
  let MobileLike = document.querySelector(".m_lclick")
  
  function LikeClick(){;
    MenuWrap.style.left="-400px";
    LikeWrap.style.left="106px";
    SearchWrap.style.left="-400px";
  }
  Like.addEventListener("click",LikeClick);

  function MobileLikeClick(){
    LikeWrap.style.left="-400px";
    MenuWrap.style.left="0";
    SearchWrap.style.left="-400px";
  }
  MobileLike.addEventListener("click",MobileLikeClick);


  // 만들기창 띄우기
  /* 조건 1. c_click(만들기)를 클릭했을 때, create_wrap은 displat : none이 displat:block으로 바뀌게 한다. */
  let Create = document.querySelector(".c_click")
  let CreateWrap = document.querySelector(".create_wrap")
  let CreateBg = document.querySelector(".create_bg")
  let MobileCreate = document.querySelector(".m_cclick")

   function CreateClick(){
    CreateWrap.style.display="block"
  }
  Create.addEventListener('click',CreateClick);
  MobileCreate.addEventListener('click',CreateClick);
  /* 조건 2. close, create_bg를 클릭했을 때, create_wrap은 display : none으로 바껴야 한다. */

 function CreateBG(){
  CreateWrap.style.display="none"
 }
 CreateBg.addEventListener('click',CreateBG);

//메인피드 만들기 script
//feed_wrap 안에 있는 feed f1 5개 반복해서 만들기
for(let i=1; i<=5; i++){
  let FeedWrap = document.querySelector(".feed_wrap");
  let Feed = document.createElement("div");
  Feed.className = "feed f"+i
  Feed.innerHTML=`
  <div class="feed_id">
              <ul>
                <a href="#">
                  <li>
                      <p><img src="img/story2.jpg" alt="x"></p>
                  </li>
                  <li>
                    <p>Insta_id${i} <span>· ${1}분</span></p>
                  </li>
                </a>
              </ul>
            </div>

            <ul class="feed_content">
              <li><img src="img/feed_img${i}.jpg" alt="x"></li>
            </ul>
            <div class="feed_comment">
              <ul class="comment_img">
                <form action="" method="get">
                  <li>
                  <img class="like" src="img/hart_like.png" alt="like">
                  <img class="hate" src="img/hate.png" alt="like">
                  <img src="img/comment.png" alt="comment">
                  <img src="img/dm.png" alt="dm">
                </li>
                   <li>
                  <img class="scrap" src="img/scrap.png" alt="scrap">
                  <img class="save" src="img/save.png" alt="scrap">
                  </li>
                  <li><p>좋아요<span class="like_cnt">1</span></p></li>
                </form>
                </ul>

                <!-- comment_img end -->
              <ul class="feed_txt">
                <li><p>보리보리~</p><span>더 보기</span></li>
              </ul>
              <ul class="comment">
                <form action="" method="get">
                  <li><a href="#">댓글 <span>0</span>개 모두 보기</a></li>
                  <li>
                    <input type="text" placeholder="댓글달기">
                    <button type="submit">전송</button>
                  </li>
                </form>
              </ul>
            </div>
            <!-- feed_comment end -->
  `;
  FeedWrap.appendChild(Feed);
  FeedHandler(Feed)
}


// like
function FeedHandler(Feed){
  let Like = Feed.querySelector(".like");
  let Hate = Feed.querySelector(".hate");
  let Scrap = Feed.querySelector(".scrap");
  let Save = Feed.querySelector(".save");
  let LikeNum = Feed.querySelector(".like_cnt");

  function LikeClick(){
    Like.style.display="none";
    Hate.style.display="inline";
    let LikeCnt = parseInt(LikeNum.textContent);
    //.like_cnt = span을 가져온 것.
    // 1을 가져오려면 span 안에 있는 요소를 가져와야 함.
    // 요소를 가져올 때는 textContent를 사용.
    LikeCnt++;
    LikeNum.textContent = LikeCnt;
  };
  Like.addEventListener('click',LikeClick)

  function HateClick(){
    Like.style.display="inline";
    Hate.style.display="none";
    let LikeCnt = parseInt(LikeNum.textContent);
    LikeCnt--;
    LikeNum.textContent = LikeCnt;
  };
  Hate.addEventListener('click',HateClick)


  // scrap

  function ScrapClick(){
    Scrap.style.display="none";
    Save.style.display="inline";
    Save.style.width="20px";
    Save.style.marginRight="2px"
  };
  Scrap.addEventListener('click',ScrapClick);

  function SaveClick(){
    Scrap.style.display="inline";
    Save.style.display="none";
  };
  Save.addEventListener('click',SaveClick)


}


