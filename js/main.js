// <a> 클릭시 알럿
function showAlert() {
    alert("클릭했습니다!");
}


// 브라우저 초기 뷰포트 높이 값 구하기
const backBigBgEl = document.querySelector(".mainbanner-back");
const bigBgEl = document.querySelector(".mainbanner.swiper-wrapper");
const mainbannerEl = document.querySelector(".mainbanner.swiper");
let initialViewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


initialViewportHeight = initialViewportHeight-36;
backBigBgEl.style.height = initialViewportHeight + "px";
bigBgEl.style.height = initialViewportHeight + "px";
mainbannerEl.style.height = initialViewportHeight + "px";


console.log("Initial viewport height: " + initialViewportHeight);




// 애니메이션 반복
// var mySwiper = new Swiper('.swiper-container', {
//     // 옵션 설정
//   });
  
//   mySwiper.on('slideChange', function () {
//     var prevSlide = this.previousIndex;
//     var currSlide = this.activeIndex;
//     var prevText = document.querySelector('.swiper-slide:nth-child(' + (prevSlide + 1) + ') .text');
//     var currText = document.querySelector('.swiper-slide:nth-child(' + (currSlide + 1) + ') .text');
  
//     if (prevText) {
//       prevText.classList.remove('animate');
//     }
  
//     currText.classList.add('animate');
//   });





// 대소문자 >> 소문자 바꿈 [.h3]
const h3Els = document.querySelectorAll(".h3");
h3Els.forEach(function(h3el){
    const h3change = h3el.textContent.toUpperCase();
    h3el.textContent = h3change;
})



// 스크롤시 헤더 변경 및 고정
const headerEl = document.querySelector("#header");
const onTopEl = document.querySelector("#on-top");


window.addEventListener("scroll", _.throttle(function() {
    if (window.scrollY > 35) {  // 스크롤이 발생한 경우
        headerEl.classList.add("fixed");
        onTopEl.style.display="none";
    } else {  // 스크롤이 발생하지 않은 경우
        headerEl.classList.remove("fixed");
        onTopEl.style.display="flex";
    }
    console.log(window.scrollY);
}, 300));





// 이미지 반복 처리
const skillImgEls = document.querySelectorAll("ul.skill > li");
for(let i=0; i <skillImgEls.length; i++){
    skillImgEls[i].style.backgroundImage="url('./img/s5-skill0" + (i+1)+".png')"; 
}

const businessImgEls = document.querySelectorAll(".business-img");
for(let i=0; i <businessImgEls.length; i++){
    businessImgEls[i].style.backgroundImage="url('./img/s6-business0" + (i+1)+".png')"; 
}

const bulidImgEls = document.querySelectorAll(".bulid-img");
for(let i=0; i <bulidImgEls.length; i++){
    bulidImgEls[i].style.backgroundImage="url('./img/s7-bulid0" + (i+1)+".png')"; 
}

// ul.skill > li:hover > a .text > p 애니메이션
// const skillTextEls = document.querySelectorAll("ul.skill > li > a .text > p");
// for(let i=0; i <skillTextEls.length; i++){
//     skillTextEls[i].style.height=skillTextEls[i].getBoundingClientRect().height+"px";
//     alert(skillTextEls[i].getBoundingClientRect().height);
// }
