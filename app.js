// 'use strict';
(function () {
  const setImage = [
    //2D
    "img/2D/天使01.jpg",
    // "img/2D/20191024願い7_完成.jpg",
    "img/2D/みつあみ02.png",
    "img/2D/羊03.jpg",
    "img/2D/インクリング04.jpg",
    "img/2D/男性05.jpg",
    "img/2D/女の子06.jpg",
    "img/2D/女の子07.jpg",
    "img/2D/青年07.jpg",
    "img/2D/女性08.jpg",
    "img/2D/ねこ09.jpg",
    // "img/2D/寝起き10.jpg",
    // "img/2D/青年11.jpg",

    //3D
    "img/3D/車/ポルシェ11.jpg",
    "img/3D/車/ポルシェレンダー比較12.jpg",
    "img/3D/車/ポルシェオクルージョン13.jpg",
    "img/3D/卒業制作/XENO14.png",
    "img/3D/卒業制作/XENO15.png",
    "img/3D/中年男性16.jpg",
    "img/3D/名刺17.png",
    "img/3D/iPhone618.png",
    // "img/3D/スカルドラゴン.png",
    "img/3D/マウス19.png",
    "img/3D/人体20.png",

    //Alim
    "img/Alm/オクトドラゴン_改.png",
    "img/Alm/だいきち.png",
    "img/Alm/まとめオブジェクト.png",
    "img/Alm/まとめモンスター.png",
    "img/Alm/まとめモンスター6属性など.png",
    "img/Alm/黒騎士_old.png"
  ];
  const view = document.getElementById('view');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const thumbnailList = document.getElementById('thumbnailList');

  let list;
  let image;
  let current = 0;
  let clickBtn = true;


  function createThumbnailItem() {
    for (let i = 0; i < setImage.length; i++) {
      list = document.createElement('li');
      image = document.createElement('img');
      image.src = setImage[i];
      list.appendChild(image);
      thumbnailList.appendChild(list);
      // list.classList.add("a");

      if (i === 0) {
        list.classList.add("selected");
      }

      list.addEventListener('click', function () {
        view.src = this.children[0].src;

        for (let j = 0; j < thumbnailList.children.length; j++) {
          thumbnailList.children[j].classList.remove("selected");
        };
        this.classList.add("selected");
        // console.log(this.children[0].src);
        // console.log(this.children[0].src.slice(-6, -4));
        // console.log(this.children[0].src.slice(-6, -4));
        // let currentImage = this.children[0].src.slice(-6, -4);
        let currentImage = this.children[0].src.slice(-6, -4);
        current = Number(currentImage) - 1;
      });
    };
  }
  createThumbnailItem();


  prev.addEventListener('click', function () {
    if (clickBtn === true) {
      clickBtn = false;
      view.classList.add("appear");
      thumbnailList.children[current].classList.remove("selected");
      current--;
      if (current < 0) {
        current = setImage.length - 1;
      }
      view.src = setImage[current];
      thumbnailList.children[current].classList.add("selected");
      setTimeout('view.classList.remove("appear");', 2000);
      setTimeout(function () {
        clickBtn = true;
      }, 2000);
    } else {
      return false;
    }
  });

  next.addEventListener('click', function () {
    if (clickBtn === true) {
      clickBtn = false;
      view.classList.add("appear");
      thumbnailList.children[current].classList.remove("selected");
      current++;
      if (current > setImage.length - 1) {
        current = 0;
      }
      view.src = setImage[current];
      thumbnailList.children[current].classList.add("selected");
      setTimeout('view.classList.remove("appear");', 2000);
      setTimeout(function () {
        clickBtn = true;
      }, 2000);
    } else {
      return false;
    }
  });

  function autoPlay() {
    setTimeout(function () {
      next.click();
      autoPlay();
    }, 5000);
  }
  window.onload = autoPlay();
})();
