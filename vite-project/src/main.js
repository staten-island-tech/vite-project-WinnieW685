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
const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    genres: ["Synthwave", "Pop"],
    image: "https://via.placeholder.com/300?text=Blinding+Lights",
    alt: "Album art for Blinding Lights by The Weeknd",
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    genres: ["Electropop"],
    image: "https://via.placeholder.com/300?text=Bad+Guy",
    alt: "Album art for Bad Guy by Billie Eilish",
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    genres: ["Pop"],
    image: "https://via.placeholder.com/300?text=Shape+of+You",
    alt: "Album art for Shape of You by Ed Sheeran",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    genres: ["Pop", "Disco"],
    image: "https://via.placeholder.com/300?text=Levitating",
    alt: "Album art for Levitating by Dua Lipa",
  },
  {
    title: "Drivers License",
    artist: "Olivia Rodrigo",
    genres: ["Pop"],
    image: "https://via.placeholder.com/300?text=Drivers+License",
    alt: "Album art for Drivers License by Olivia Rodrigo",
  },
  {
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    genres: ["Funk", "Pop"],
    image: "https://via.placeholder.com/300?text=Uptown+Funk",
    alt: "Album art for Uptown Funk by Mark Ronson and Bruno Mars",
  },
  {
    title: "Happier Than Ever",
    artist: "Billie Eilish",
    genres: ["Alternative", "Pop"],
    image: "https://via.placeholder.com/300?text=Happier+Than+Ever",
    alt: "Album art for Happier Than Ever by Billie Eilish",
  },
  {
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    genres: ["Pop"],
    image: "https://via.placeholder.com/300?text=Watermelon+Sugar",
    alt: "Album art for Watermelon Sugar by Harry Styles",
  },
  {
    title: "Circles",
    artist: "Post Malone",
    genres: ["Pop", "Hip-Hop"],
    image: "https://via.placeholder.com/300?text=Circles",
    alt: "Album art for Circles by Post Malone",
  },
  {
    title: "Sunflower",
    artist: "Post Malone & Swae Lee",
    genres: ["Hip-Hop", "Pop"],
    image: "https://via.placeholder.com/300?text=Sunflower",
    alt: "Album art for Sunflower by Post Malone and Swae Lee",
  },
  {
    title: "Peaches",
    artist: "Justin Bieber",
    genres: ["R&B", "Pop"],
    image: "https://via.placeholder.com/300?text=Peaches",
    alt: "Album art for Peaches by Justin Bieber",
  },
  {
    title: "Old Town Road",
    artist: "Lil Nas X",
    genres: ["Country Rap"],
    image: "https://via.placeholder.com/300?text=Old+Town+Road",
    alt: "Album art for Old Town Road by Lil Nas X",
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    genres: ["Pop"],
    image: "https://via.placeholder.com/300?text=As+It+Was",
    alt: "Album art for As It Was by Harry Styles",
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
    genres: ["Alternative", "Pop"],
    image: "https://via.placeholder.com/300?text=Heat+Waves",
    alt: "Album art for Heat Waves by Glass Animals",
  },
  {
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    genres: ["Pop"],
    image: "https://via.placeholder.com/300?text=Stay",
    alt: "Album art for Stay by The Kid LAROI and Justin Bieber",
  },
  {
    title: "Shallow",
    artist: "Lady Gaga & Bradley Cooper",
    genres: ["Pop", "Soundtrack"],
    image: "https://via.placeholder.com/300?text=Shallow",
    alt: "Album art for Shallow by Lady Gaga and Bradley Cooper",
  },
  {
    title: "Radioactive",
    artist: "Imagine Dragons",
    genres: ["Alternative Rock"],
    image: "https://via.placeholder.com/300?text=Radioactive",
    alt: "Album art for Radioactive by Imagine Dragons",
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    genres: ["Rock", "Pop"],
    image: "https://via.placeholder.com/300?text=Believer",
    alt: "Album art for Believer by Imagine Dragons",
  },
  {
    title: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    genres: ["Pop"],
    image: "https://via.placeholder.com/300?text=Cant+Stop+the+Feeling",
    alt: "Album art for Can't Stop the Feeling by Justin Timberlake",
  },
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    genres: ["Hip-Hop"],
    image: "https://via.placeholder.com/300?text=HUMBLE",
    alt: "Album art for HUMBLE by Kendrick Lamar",
  },
  {
    title: "SICKO MODE",
    artist: "Travis Scott",
    genres: ["Hip-Hop"],
    image: "https://via.placeholder.com/300?text=SICKO+MODE",
    alt: "Album art for SICKO MODE by Travis Scott",
  },
  {
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    genres: ["Pop Rock"],
    image: "https://via.placeholder.com/300?text=Good+4+U",
    alt: "Album art for Good 4 U by Olivia Rodrigo",
  },
  {
    title: "Shake It Off",
    artist: "Taylor Swift",
    genres: ["Pop"],
    image: "https://via.placeholder.com/300?text=Shake+It+Off",
    alt: "Album art for Shake It Off by Taylor Swift",
  },
  {
    title: "Anti-Hero",
    artist: "Taylor Swift",
    genres: ["Pop"],
    image: "https://via.placeholder.com/300?text=Anti-Hero",
    alt: "Album art for Anti-Hero by Taylor Swift",
  },
  {
    title: "WAP",
    artist: "Cardi B ft. Megan Thee Stallion",
    genres: ["Hip-Hop"],
    image: "https://via.placeholder.com/300?text=WAP",
    alt: "Album art for WAP by Cardi B",
  },
  {
    title: "Rockstar",
    artist: "DaBaby ft. Roddy Ricch",
    genres: ["Hip-Hop"],
    image: "https://via.placeholder.com/300?text=Rockstar",
    alt: "Album art for Rockstar by DaBaby",
  },
  {
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    genres: ["Pop", "Ballad"],
    image: "https://via.placeholder.com/300?text=Someone+You+Loved",
    alt: "Album art for Someone You Loved by Lewis Capaldi",
  },
  {
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    genres: ["Soul", "Pop"],
    image: "https://via.placeholder.com/300?text=Thinking+Out+Loud",
    alt: "Album art for Thinking Out Loud by Ed Sheeran",
  },
  {
    title: "The Hills",
    artist: "The Weeknd",
    genres: ["Alternative R&B"],
    image: "https://via.placeholder.com/300?text=The+Hills",
    alt: "Album art for The Hills by The Weeknd",
  },
  {
    title: "Lose Yourself",
    artist: "Eminem",
    genres: ["Hip-Hop"],
    image: "https://via.placeholder.com/300?text=Lose+Yourself",
    alt: "Album art for Lose Yourself by Eminem",
  },
  {
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genres: ["Grunge", "Rock"],
    image: "https://via.placeholder.com/300?text=Teen+Spirit",
    alt: "Album art for Smells Like Teen Spirit by Nirvana",
  },
  {
    title: "Billie Jean",
    artist: "Michael Jackson",
    genres: ["Pop", "Funk"],
    image: "https://via.placeholder.com/300?text=Billie+Jean",
    alt: "Album art for Billie Jean by Michael Jackson",
  },
];
function inject(item) {
  const container = document.querySelector(".container");

  const html = `
    <div class="card" data-title="${item.title}">
      <h2 class="cardtitle">${item.title}</h2>
      <h2 class="cardartist">${item.artist}</h2>
      <h4 class="genre">${item.genre}</h4>
      <img src="${item.image}" alt="">
      <button class="listened">listened</button>
    </div>
  `;

  container.insertAdjacentHTML("afterbegin", html);
}
inject();
