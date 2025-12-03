import "./style.css";
/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
 */
const items = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    genres: ["Synthwave", "Pop"],
    image: "/BlindingLights.png",
    alt: "Album art for Blinding Lights by The Weeknd",
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    genres: ["Electro", "Pop"],
    image: "/BadGuy.jpg",
    alt: "Album art for Bad Guy by Billie Eilish",
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    genres: ["Pop"],
    image: "/ShapeofYou.png",
    alt: "Album art for Shape of You by Ed Sheeran",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    genres: ["Pop", "Disco"],
    image: "/levitating.png",
    alt: "Album art for Levitating by Dua Lipa",
  },
  {
    title: "Drivers License",
    artist: "Olivia Rodrigo",
    genres: ["Pop"],
    image: "/DriversLicense.png",
    alt: "Album art for Drivers License by Olivia Rodrigo",
  },
  {
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    genres: ["Funk", "Pop"],
    image: "/UptownFunk.jpg",
    alt: "Album art for Uptown Funk by Mark Ronson and Bruno Mars",
  },
  {
    title: "Happier Than Ever",
    artist: "Billie Eilish",
    genres: ["Alternative", "Pop"],
    image: "/HapperThanEver.png",
    alt: "Album art for Happier Than Ever by Billie Eilish",
  },
  {
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    genres: ["Pop"],
    image: "/WatermelonSugar.png",
    alt: "Album art for Watermelon Sugar by Harry Styles",
  },
  {
    title: "Circles",
    artist: "Post Malone",
    genres: ["Pop", "Hip-Hop"],
    image: "/Circles.png",
    alt: "Album art for Circles by Post Malone",
  },
  {
    title: "Sunflower",
    artist: "Post Malone & Swae Lee",
    genres: ["Hip-Hop", "Pop"],
    image: "/sunflower.jpg",
    alt: "Album art for Sunflower by Post Malone and Swae Lee",
  },
  {
    title: "Peaches",
    artist: "Justin Bieber",
    genres: ["R&B", "Pop"],
    image: "/Peaches.jpg",
    alt: "Album art for Peaches by Justin Bieber",
  },
  {
    title: "Old Town Road",
    artist: "Lil Nas X",
    genres: ["Rap"],
    image: "/OldTownRoad.jpg",
    alt: "Album art for Old Town Road by Lil Nas X",
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    genres: ["Pop"],
    image: "/AsItWas.jpg",
    alt: "Album art for As It Was by Harry Styles",
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
    genres: ["Alternative", "Pop"],
    image: "Heatwaves.jpg",
    alt: "Album art for Heat Waves by Glass Animals",
  },
  {
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    genres: ["Pop"],
    image: "/Stay.jpg",
    alt: "Album art for Stay by The Kid LAROI and Justin Bieber",
  },
  {
    title: "Shallow",
    artist: "Lady Gaga & Bradley Cooper",
    genres: ["Pop", "Soundtrack"],
    image: "/Shallow.png",
    alt: "Album art for Shallow by Lady Gaga and Bradley Cooper",
  },
  {
    title: "Radioactive",
    artist: "Imagine Dragons",
    genres: ["Rock"],
    image: "/Radioactive.jpg",
    alt: "Album art for Radioactive by Imagine Dragons",
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    genres: ["Rock", "Pop"],
    image: "/Believer.jpg",
    alt: "Album art for Believer by Imagine Dragons",
  },
  {
    title: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    genres: ["Pop"],
    image: "CantStopTheFeeling.png",
    alt: "Album art for Can't Stop the Feeling by Justin Timberlake",
  },
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    genres: ["Hip-Hop"],
    image: "/Humble.jpg",
    alt: "Album art for HUMBLE by Kendrick Lamar",
  },
  {
    title: "SICKO MODE",
    artist: "Travis Scott",
    genres: ["Hip-Hop"],
    image: "SickoMode.jpg",
    alt: "Album art for SICKO MODE by Travis Scott",
  },
  {
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    genres: ["Pop", "Rock"],
    image: "Good4You.png",
    alt: "Album art for Good 4 U by Olivia Rodrigo",
  },
  {
    title: "Shake It Off",
    artist: "Taylor Swift",
    genres: ["Pop"],
    image: "ShakeitOff.png",
    alt: "Album art for Shake It Off by Taylor Swift",
  },
  {
    title: "Anti-Hero",
    artist: "Taylor Swift",
    genres: ["Pop"],
    image: "/AntiHero.png",
    alt: "Album art for Anti-Hero by Taylor Swift",
  },
  {
    title: "WAP",
    artist: "Cardi B ft. Megan Thee Stallion",
    genres: ["Hip-Hop"],
    image: "WAP.jpg",
    alt: "Album art for WAP by Cardi B",
  },
  {
    title: "Rockstar",
    artist: "DaBaby ft. Roddy Ricch",
    genres: ["Hip-Hop"],
    image: "Rockstar.jpg",
    alt: "Album art for Rockstar by DaBaby",
  },
  {
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    genres: ["Pop", "Ballad"],
    image: "/SomeoneYouLoved.png",
    alt: "Album art for Someone You Loved by Lewis Capaldi",
  },
  {
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    genres: ["Soul", "Pop"],
    image: "/ThinkingOutLoud.png",
    alt: "Album art for Thinking Out Loud by Ed Sheeran",
  },
  {
    title: "The Hills",
    artist: "The Weeknd",
    genres: ["Alternative", "R&B"],
    image: "/TheHills.jpg",
    alt: "Album art for The Hills by The Weeknd",
  },
  {
    title: "Lose Yourself",
    artist: "Eminem",
    genres: ["Hip-Hop"],
    image: "/LoseYourself.jpg",
    alt: "Album art for Lose Yourself by Eminem",
  },
  {
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genres: ["Grunge", "Rock"],
    image: "/SmellLikeTeenSpirit.jpg",
    alt: "Album art for Smells Like Teen Spirit by Nirvana",
  },
  {
    title: "Billie Jean",
    artist: "Michael Jackson",
    genres: ["Pop", "Funk"],
    image: "/BillieJean.jpg",
    alt: "Album art for Billie Jean by Michael Jackson",
  },
];
let cart = [];
//create a javascript array called items, each item shouldhave the following key , anme

function inject(item) {
  //query the container
  const container = document.querySelector(".container");
  const html = `<div class="card" data-title= "${item.title}" data-genre="${item.genre}"= data-artist="${item.artist}">
        <h2 class="cardtitle" >${item.title}</h2>
        <img src=${item.image} alt="">
        <h4 class="artist" >${item.artist} </h4>
        <button class="wish">Add to Wishlist</button>
        </div>`;
  container.insertAdjacentHTML("afterbegin", html);
}
function showCart(item) {
  const cart = document.querySelector(".card");
  const html = `<div class="cart">
        <h4 class="cartcardtitle" >${item.title} </h4>
        <h4 class="cartcardartist" >${item.artist} </h4>
        </div>`;
  cart.insertAdjacentHTML("afterbegin", html);
}

items.forEach((items) => inject(items));

function addToCart() {
  const buttons = document.querySelectorAll(".wish");
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      const title = event.target.closest(".card").getAttribute("data-title");
      console.log(event.target.closest(".card").getAttribute("data-title"));
      const p = items.find((item) => item.title === title);
      console.log("found");
      cart.push(p);
      showCart(p);
      //find item in = done
      //push item to cart= done
      //total cart
      //show cart
    })
  );
}
addToCart();

/* function category() {
  const allButtons = document.querySelectorAll(".category");
  allButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      console.log(event.target.textContent);
      const genre = event.target.textContent.trim();
      filterByGenre(genre);
    });
  });
}
category();

function filterByGenre(genre) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardGenre = card.getAttribute("data-genre");
    if (genre === cardGenre) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  }); */
/* } */
