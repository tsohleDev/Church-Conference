const speakersList = document.querySelector('.featured__speakers')

const speakers = [{
    name: 'Myles Munroe',
    profession: 'Bahamian evangelist and ordained minister avid professor of the Kingdom of God.',
    Work: 'He was chief executive officer and chairman of the board of the International Third World Leaders Association and president of the International Leadership Training Institute as well as the author of numerous books',
    url: './images/munroe.jpg'
}, {
    name: 'Bemjamin Dube',
    profession: 'South African gospel praise warrior.',
    Work: 'gold and platinum status in the South African music rankings. Dube is also a lead pastor of the High Praise Centre in Voslorus, east of Johannesburg.',
    url: './images/Benjamin.jpg'
}, {
    name: 'Carl Jung',
    profession: 'Swiss psychiatrist.',
    Work: 'Jung\'s work has been influential in the fields of psychiatry, anthropology, archaeology, literature, philosophy, psychology, and religious studies.',
    url: './images/jung.jpg'
}, {
    name: 'Osinachi Nwachukwu',
    profession: 'Nigerian gospel musician.',
    Work: 'achieved popularity through the single "Ekwueme" featuring Prospa Ochimana. Her death was alleged to be as a result of domestic violence. Her husband, Peter Nwachukwu, was arrested in connection with her death',
    url: './images/Nwachukwu.jpg'
}, {
    name: 'Wang Yi',
    profession: 'Chiness founding pastor of the Early Rain Covenant Church.',
    Work: 'a Calvinist house church in Chengdu. He is also a productive writer, editor, and social activist, and was a legal scholar at Chengdu University before he resigned to take up the pastorate.',
    url: './images/Wang.jpg'
}, {
    name: 'Guy Penroe',
    profession: 'German country gospel singer.',
    Work: 'Guy Allen Penrod is a gospel music singer. He is known for his work as the lead singer of the Gaither Vocal Band.',
    url: './images/Penrod.jpg'
}]

const loadSpeakers = number => {
    const insertTag = (type, src, innerHTML, clas, article, li, div) => {
        let tag = document.createElement(type)
        tag.classList.add(clas)
        if (type === 'img') {
            tag.src = src
            div.appendChild(tag)
        } else {
            tag.innerHTML = innerHTML
            article.appendChild(tag)
        }
    }

    for (let i=0; i<number; i++){
        let li = document.createElement('li')
        li.classList.add('speaker__li')

        let article = document.createElement('article')
        let div = document.createElement('div')
        article.classList.add('speaker__article')
        div.classList.add('speaker__image__section')
        insertTag('img', speakers[i].url, '', 'speaker__image', article, li, div)
        insertTag('img', './images/Board-mobile.svg', '', 'speaker__image__deco', article, li, div)
        insertTag('h3', '', speakers[i].name, 'speaker__name', article, li)
        insertTag('h4', '', speakers[i].profession, 'speaker__profession', article, li, div)
        insertTag('p', '', speakers[i].Work, 'speaker__work', article, li, div)

        li.appendChild(div)
        li.appendChild(article)
        speakersList.appendChild(li)
    }
}

loadSpeakers(6)