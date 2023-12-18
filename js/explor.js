
for(let i=1; i<=18; i++){
  let ExploreWrap = document.querySelector(".explore_wrap");
  let Explore = document.createElement("div");
  Explore .className = "explore"
  Explore .innerHTML = `
  <img src="img/ex0${i}.jpg" alt="x">
          <ul class="hover">
            <li><img src="img/explore_commet.png" alt="x"><span>0</span></li>
            <li><img src="img/explore_heart.png" alt="x"><span>0</span></li>
          </ul>
  `
  ExploreWrap.appendChild(Explore);
};