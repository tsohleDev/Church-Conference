// Load the featured spakers dynamicall
const speakersSection = document.querySelector('#Pastors__Artists');

const speakers = [{
  name: 'Myles Munroe',
  profession: 'Bahamian evangelist and ordained minister avid professor of the Kingdom of God.',
  Work: 'He was chief executive officer and chairman of the board of the International Third World Leaders Association and president of the International Leadership Training Institute as well as the author of numerous books',
  url: './images/munroe.svg',
}, {
  name: 'Bemjamin Dube',
  profession: 'South African gospel praise warrior.',
  Work: 'Gold and platinum status in the South African music rankings. Dube is also a lead pastor of the High Praise Centre in Voslorus, east of Johannesburg.',
  url: './images/Benjamin.svg',
}, {
  name: 'Carl Jung',
  profession: 'Swiss psychiatrist.',
  Work: 'Jung\'s work has been influential in the fields of psychiatry, anthropology, archaeology, literature, philosophy, psychology, and religious studies.',
  url: './images/jung.svg',
}, {
  name: 'Osinachi Nwachukwu',
  profession: 'Nigerian gospel musician.',
  Work: 'Achieved popularity through the single "Ekwueme" featuring Prospa Ochimana. Her death was alleged to be as a result of domestic violence. Her husband, Peter Nwachukwu, was arrested in connection with her death',
  url: './images/Nwachukwu.svg',
}, {
  name: 'Wang Yi',
  profession: 'Chiness founding pastor of the Early Rain Covenant Church.',
  Work: 'A Calvinist house church in Chengdu. He is also a productive writer, editor, and social activist, and was a legal scholar at Chengdu University before he resigned to take up the pastorate.',
  url: './images/Wang.svg',
}, {
  name: 'Guy Penroe',
  profession: 'German country gospel singer.',
  Work: 'Guy Allen Penrod is a gospel music singer. He is known for his work as the lead singer of the Gaither Vocal Band.',
  url: './images/penrod.svg',
}];

const loadSpeakers = (number) => {
  let i = 0;

  const insertTag = (type, src, innerHTML, clas, article, li, div) => {
    const tag = document.createElement(type);
    tag.classList.add(clas);
    if (type === 'img') {
      tag.src = src;
      tag.alt = speakers[i].name;
      div.appendChild(tag);
    } else {
      if (type !== 'hr') {
        tag.innerHTML = innerHTML;
      }

      article.appendChild(tag);
    }
  };

  const ul = document.createElement('ul');
  ul.classList.add('featured__speakers');

  for (i; i < number; i += 1) {
    const li = document.createElement('li');
    li.classList.add('speaker__li');
    li.classList.add(`speaker__li${i}`);

    const article = document.createElement('article');
    const div = document.createElement('div');
    article.classList.add('speaker__article');
    div.classList.add('speaker__image__section');
    insertTag('img', speakers[i].url, '', 'speaker__image', article, li, div);
    insertTag('img', './images/Board-mobile.svg', '', 'speaker__image__deco', article, li, div);
    insertTag('h3', '', speakers[i].name, 'speaker__name', article, li);
    insertTag('hr', '', '', 'speaker__hr', article, li);
    insertTag('h4', '', speakers[i].profession, 'speaker__profession', article, li, div);
    insertTag('p', '', speakers[i].Work, 'speaker__work', article, li, div);

    li.appendChild(div);
    li.appendChild(article);
    ul.appendChild(li);
    speakersSection.appendChild(ul);
  }
};

loadSpeakers(6);
