for(let i=1; i<6; i++){
  let ReelsWrap = document.querySelector(".reels_wrap");
  let Reels = document.createElement("div")
  Reels.className="reels"
  Reels.innerHTML = `
  <div class="reels_img">
    <ul>
      <li>
        <img src="img/reels01.jpg" alt="x">
      </li>
      </ul>
    <div class="reels_txt">
      <ul class="reels_id">
        <li><img src="img/c3.jpg" alt=""></li>
        <li>Insta_id0${i}</li>
        <li><p>팔로우</p></li>
      </ul>
      <ul class="reels_contents"></ul>
      <ul class="reels_audio"></ul>
    </div>
  </div>
  <div class="reels_comment">
    <ul>
      <li>
        <img class="like" src="img/like.png" alt="x">
        <img class="hate" src="img/hate.png' alt="x"> 
        <p class="like_cnt">0</p>
       </li>
      <li>
        <img src="img/comment.png" alt="x"><p>0</p></li>
      <li><img src="img/dm.png" alt="x"></li>
      <li>
        <img class="scrap" src="img/scrap.png" alt="x">
        <img class="save" src="img/save.png" alt="x">
      </li>
      <li><p class="add_txt">···</p></li>
      <li><img src="img/c3.jpg" alt="x"></li>
    </ul>
  </div>
  `
  ReelsWrap.appendChild(Reels);
  ReelsHandler(Reels);
}

// like
function ReelsHandler(Reels){
  let Like = Reels.querySelector(".like");
  let Hate = Reels.querySelector(".hate");
  let Scrap = Reels.querySelector(".scrap");
  let Save = Reels.querySelector(".save");
  let LikeNum = Reels.querySelector(".like_cnt");

  function LikeClick(){
    Like.style.display="none";
    Hate.style.display="inline";

    /* LikeNum : p태그의 class 이름 
       LikeNum.textcontent : p태그 안에 있는 문자 = 0
       parseInt(0) >> 문자를 숫자로 변환
       LikeCnt = LikeNum.textContent
        ㄴ> LikeCnt라는 변수 안에 숫자를 담아줌
        ㄴ> LikeCnt = 0 */

    let LikeCnt = parseInt(LikeNum.textContent);

    LikeCnt++;
    /* 0이라는 숫자에 + 1 */
    LikeNum.textContent = LikeCnt;
    /* LikeCnt에 +1을 해줬지만 적용이 된게 아님.
       LikeNum.textContent 를 LikeCnt로 보내준 것 */
  };
  Like.addEventListener('click',LikeClick)
  
  function HateClick(){
    Hate.style.display="none";
    Like.style.display="inline";

    let LikeCnt = parseInt(LikeNum.textContent);
    LikeCnt--;
    LikeNum.textContent = LikeCnt;
  };
  Hate.addEventListener('click',HateClick)

  // scrap

  function ScrapClick(){
    Scrap.style.display="none";
    Save.style.display="inline";
    Save.style.width="22px";
    Save.style.height="26px";
    Save.style.marginRight="1px";
  };
  Scrap.addEventListener('click',ScrapClick)
  
  function SaveClick(){
    Save.style.display="none";
    Scrap.style.display="inline";
    
  };
  Save.addEventListener('click',SaveClick)



}