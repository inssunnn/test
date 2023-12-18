/* 
p_click 클릭 -> t_click, r_click의 border-top값이 사라지고 p_click border-top 활성화 -> tag_list, reels_list는 사라짐
*/

let Pclick = document.querySelector(".p_click");
let Rclick = document.querySelector(".r_click");
let Tclick = document.querySelector(".t_click");
let PostList = document.querySelector(".post_list");
let ReelsList = document.querySelector(".reels_list");
let TagList = document.querySelector(".tag_list");

function Postclick(){
  Pclick.style.borderTop="3px solid #aaa";
  Rclick.style.borderTop="0";
  Tclick.style.borderTop="0";
  PostList.style.display="flex";
  ReelsList.style.display="none";
  TagList.style.display="none";
}
Pclick.addEventListener("click",Postclick);

function Reelsclick(){
  Pclick.style.borderTop="0";
  Rclick.style.borderTop="3px solid #aaa";
  Tclick.style.borderTop="0";
  PostList.style.display="none";
  ReelsList.style.display="flex";
  TagList.style.display="none";
}
Rclick.addEventListener("click",Reelsclick);

function Tagclick(){
  Pclick.style.borderTop="0";
  Rclick.style.borderTop="0";
  Tclick.style.borderTop="3px solid #aaa";
  PostList.style.display="none";
  ReelsList.style.display="none";
  TagList.style.display="flex";
}
Tclick.addEventListener("click",Tagclick);

for(let i=1; i<=9; i++){
  let PostList = document.querySelector(".post_list");
  let Post = document.createElement("div");
  Post.className = "post_list_wrap"+i
  Post.innerHTML=`
  <div class="post_list_wrap">
    <img src="img/c${i}.jpg" alt="x">
    <ul class="hover">
      <li><img src="img/explore_heart.png" alt="x">
        <span>0</span></li>
      <li><img src="img/explore_commet.png" alt="x">
        <span>0</span></li>
    </ul>
  </div>
  `;
  PostList.appendChild(Post);
}

for(let i=1; i<=12; i++){
  let ReelsList = document.querySelector(".reels_list");
  let Reels = document.createElement("div");
  Reels.className = "reels_list_wrap"+i
  Reels.innerHTML=`
  <div class="reels_list_wrap">
    <img src="img/c${i}.jpg" alt="x">
    <ul class="hover">
      <li><img src="img/explore_heart.png" alt="x">
        <span>0</span></li>
      <li><img src="img/explore_commet.png" alt="x">
        <span>0</span></li>
    </ul>
  </div>
  `;
  ReelsList.appendChild(Reels);
}

for(let i=1; i<=9; i++){
  let TagList = document.querySelector(".tag_list");
  let Tag = document.createElement("div");
  Tag.className = "tag_list_wrap"+i
  Tag.innerHTML=`
  <div class="tag_list_wrap">
    <img src="img/c${i}.jpg" alt="x">
    <ul class="hover">
      <li><img src="img/explore_heart.png" alt="x">
        <span>0</span></li>
      <li><img src="img/explore_commet.png" alt="x">
        <span>0</span></li>
    </ul>
  </div>
  `;
  TagList.appendChild(Tag);
}