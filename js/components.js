// loadImages();
// document.body.addEventListener('load',loadImages )

let cardImage = document.querySelectorAll(".card__image");

cardImage.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    cardImage[index].style.opacity = 0.5;
  });

  card.addEventListener("mouseleave", () => {
    cardImage[index].style.opacity = 1;
  });
});

if (navigator.onLine) {
  console.log("You are Connected");

  let imageObject = [
    {
      img: `https://source.unsplash.com/random/nature`,
    },
    {
      img: `https://source.unsplash.com/random/beach`,
    },
    {
      img: `https://source.unsplash.com/random/sports`,
    },
    {
      img: `https://source.unsplash.com/random/experimental`,
    },
    {
      img: `https://source.unsplash.com/random/people`,
    },
    {
      img: `https://source.unsplash.com/random/travel`,
    },
    {
      img: `https://source.unsplash.com/random/wallpaper`,
    },
    {
      img: `https://source.unsplash.com/random/cartoon`,
    },
    {
      img: `https://source.unsplash.com/random/film`,
    },
    {
      img: `https://source.unsplash.com/random/fashion`,
    },
    {
      img: `https://source.unsplash.com/random/`,
    },
    {
      img: `https://source.unsplash.com/random/beauty`,
    },
  ];
  let image = document.querySelectorAll(".image");

  image.forEach((image, index) => {
    image.src = `${imageObject[index].img}`;
  });
} else {
  let imageObject = [
    {
      img: "/images/others/one.jpg",
    },
    {
      img: "/images/others/two.jpg",
    },
    {
      img: "/images/others/three.jpg",
    },
    {
      img: "/images/others/four.png",
    },
    {
      img: "/images/others/five.jpg",
    },
    {
      img: "/images/others/six.png",
    },
    {
      img: "/images/others/seven.jpg",
    },
    {
      img: "/images/others/eight.jpg",
    },
    {
      img: "/images/others/nine.jpg",
    },
    {
      img: "/images/others/ten.jpg",
    },
    {
      img: "/images/others/eleven.jpg",
    },
    {
      img: "/images/others/twelve.jpg",
    },
  ];

  console.log("You are not connected");

  let image = document.querySelectorAll(".image");

  image.forEach((image, index) => {
    image.src = `${imageObject[index].img}`;
  });
}

function loadImages() {
  let image = document.querySelectorAll(".image");

  image.forEach((image, index) => {
    image.src = `${imageObject[index].img}`;
  });
}
