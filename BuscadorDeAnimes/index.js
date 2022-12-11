const button = document.querySelector('.browserButton');
const input = document.querySelector('.inputBrowser');
const div = document.getElementById('content');
const animeAzar = ['naruto', 'one piece', 'dragon ball', 'gintama', 'Jujutsu Kaisen', 'Yuri!!! on ice',
'Kimetsu no Yaiba', 'Hunter x Hunter', 'Banana Fish', 'Bleach', 'Shingeki no Kyojin', 'Death Note',
'Sabikui Bisco', 'My Hero Academia', 'Tokyo'];

let numberRandom = Math.round(Math.random() * animeAzar.length);
console.log(numberRandom);
let randomSelect = animeAzar[numberRandom];

const petiAnime = async (text) => {
  const resp = await fetch(`https://api.jikan.moe/v4/anime?q=${text}`);
  const { data } = await resp.json();
  let information = {};
  information = data.map(
    ({ title, aired, images, synopsis, popularity, rank, score, status }) => ({
      title: title,
      aired: aired.prop.from,
      url: images.jpg.image_url,
      synopsis: synopsis,
      popularity,
      rank,
      score,
      status,
    })
  );
  return information;
};

const renderInfo = async (inputValue) => {
  const info = await petiAnime(inputValue);
  console.log(info);
  info.forEach(
    ({ title, aired, url, synopsis, popularity, rank, score, status }) => {
      const img = document.createElement('img');
      const synopsisAnime = document.createElement('p');
      const airedAnime = document.createElement('strong');
      const popularityAnime = document.createElement('strong');
      const rankAnime = document.createElement('strong');
      const scoreAnime = document.createElement('strong');
      const statusAnime = document.createElement('strong');
      const titleAnime = document.createElement('h1');
      const section = document.createElement('section');
      titleAnime.innerHTML = title;
      img.src = url;
      airedAnime.innerHTML = `Fecha de inicio: ${aired.day} - ${aired.month} - ${aired.year}`;
      popularityAnime.innerHTML = `Popularity: ${popularity}`;
      synopsisAnime.innerHTML = synopsis;
      rankAnime.innerHTML = `Rank: ${rank}`;
      scoreAnime.innerHTML = `Score: ${score}`;
      statusAnime.innerHTML = `Status: ${status}`;
      section.appendChild(img);
      section.appendChild(titleAnime);
      section.appendChild(airedAnime);
      section.appendChild(popularityAnime);
      section.appendChild(rankAnime);
      section.appendChild(scoreAnime);
      section.appendChild(statusAnime);
      section.appendChild(synopsisAnime);
      div.appendChild(section);
    }
  );
};

renderInfo(randomSelect);

button.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (inputValue != '') {
    document.getElementById("content").innerHTML = '';
    renderInfo(inputValue);
  }
});
