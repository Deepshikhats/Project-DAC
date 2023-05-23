const section = document.getElementById('section_1')
const hamburger = document.getElementById('hamburger_menu')
const sliderWrapper = document.getElementById('slider_wrapper')
const btn = document.getElementById('iconsToHide')

//handles the opening and closing of hamburger menu

const handleMenu = () => {
  hamburger.classList.toggle('slider')
  sliderWrapper.classList.toggle('hidden')
  btn?.classList?.toggle('invisible')
  document.querySelector('body').classList.toggle('overflow-y-hidden')
}

const tabs = document.querySelectorAll('.tab')
const content = document.getElementById('content')

//event listener on the tabs in founder section for changing descriptions
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabName = tab.getAttribute('data-tab')
    switch (tabName.toLowerCase()) {
      case 'about':
        content.innerText = 'This is about'
        tab.classList.add('border-b-2', 'border-tertiary')
        removeSelection(tab)
        break
      case 'experience':
        content.innerText = 'This is experinece'
        tab.classList.add('border-b-2', 'border-tertiary')
        removeSelection(tab)
        break
      case 'history':
        content.innerText = 'This is history'
        tab.classList.add('border-b-2', 'border-tertiary')
        removeSelection(tab)

        break
      case 'accolades':
        content.innerText = 'This is accolades'
        tab.classList.add('border-b-2', 'border-tertiary')
        removeSelection(tab)

        break
      case 'certifications':
        content.innerText = 'This is certificates'
        tab.classList.add('border-b-2', 'border-tertiary')
        removeSelection(tab)

        break
    }
  })
})

//removes border-bottom in founder details section when new tab clicks
const removeSelection = selectedTab => {
  tabs.forEach(tab => {
    if (tab !== selectedTab) {
      tab.classList.remove('border-b-2', 'border-tertiary')
    }
  })
}
//expands and collapse the accordion
const accordions = document.querySelectorAll('.accordion')
accordions.forEach(acc => {
  acc.addEventListener('click', () => {
    acc.nextElementSibling.classList.toggle('hidden')
    const button = acc.querySelector('button')
    const img = button.querySelector('img')
    if (img.getAttribute('src') == './assets/icons/add_plus.svg') {
      img.src = './assets/icons/minus.svg'
    } else {
      img.src = './assets/icons/add_plus.svg'
    }
  })
})
//testimonial section review slider
const slider = document.querySelector('.autoSlider')
if (slider) {
  const dotSlider = slider.querySelectorAll('span')
  const reviewCards = document.querySelectorAll('.reviewCard')
  const reviews = [
    {
      src: './assets/images/kohli.jpg',
      name: 'Kohli',
      position: 'Cricketer',
      text: 'lalalala'
    },
    {
      src: './assets/images/abd2.jpg',
      name: 'ABD',
      position: 'Cricketer',
      text: 'lalalala'
    },
    {
      src: './assets/images/trigger.png',
      name: 'Dribiani',
      position: 'Cricketer',
      text: 'lalalala'
    },
    {
      src: './assets/images/messi.jpeg',
      name: 'Messi',
      position: 'Football Player',
      text: 'lalalala'
    }
  ]
  let activeIndex = 0
  let reviewIndex = 0
  setInterval(function () {
    //changes slider
    dotSlider[activeIndex].classList.remove('dotControl_active')
    activeIndex++
    reviewIndex++
    if (activeIndex >= dotSlider.length) {
      activeIndex = 0
    }
    dotSlider[activeIndex].classList.add('dotControl_active')
    if (reviewCards.length) {
      reviewCards[0].querySelector('img').src = reviews[reviewIndex].src
      reviewCards[0].querySelector('.name').innerText =
        reviews[reviewIndex].name
      reviewCards[0].querySelector('.position').innerText =
        reviews[reviewIndex].position
      if (reviewIndex == reviews.length - 1) {
        reviewCards[1].querySelector('img').src = reviews[0].src
        reviewCards[1].querySelector('.name').innerText = reviews[0].name
        reviewCards[1].querySelector('.position').innerText =
          reviews[0].position

        reviewIndex = 0
      } else {
        reviewCards[1].querySelector('img').src = reviews[reviewIndex + 1].src
        reviewCards[1].querySelector('.name').innerText =
          reviews[reviewIndex + 1].name
        reviewCards[1].querySelector('.position').innerText =
          reviews[reviewIndex + 1].position
      }
    }
    //changes review
  }, 2000)
}

const indexList = document.getElementById('index')?.querySelectorAll('li')
indexList?.forEach(index => {
  index.addEventListener('click', () => {
    const indexName = index.querySelector('a').getAttribute('href')
    indexList.forEach(v => {
      if (v.querySelector('a').getAttribute('href') === indexName) {
        v.querySelector('a').classList.add('activeIndex')
      } else {
        v.querySelector('a').classList.remove('activeIndex')
      }
    })
  })
})

//newsletter slider

// const newsletters = document
//   .getElementById('#newsletter_section')
//   .querySelectorAll('.card')
// const slideNewsletter = direction => {
//   let currentCard = {
//     title: newsletters[0].querySelector('.title').innerText,
//     src: newsletters[0].querySelector('img').src,
//     content: newsletters[0].querySelector('.content').innerText
//   }

//   if (direction === 'left') {
//     newsletters.forEach((v, i) => {
//       if (i === newsletters.length - 1) {
//         v.querySelector('.title').innerText = currentCard.title
//         v.querySelector('img').src = currentCard.src
//         v.querySelector('.content').innerText = currentCard.content
//       } else {
//         v.querySelector('.title').innerText =
//           newsletters[i + 1].querySelector('.title').innerText
//         v.querySelector('.content').innerText =
//           newsletters[i + 1].querySelector('.content').innerText
//         v.querySelector('img').src = newsletters[i + 1].querySelector('img').src
//       }
//     })
//   } else {
//     newsletters.forEach((v, i) => {
//       if (i === 0) {
//         v.querySelector('.title').innerText =
//           newsletters[newsletters.length - 1].querySelector('.title').innerText
//         v.querySelector('img').src =
//           newsletters[newsletters.length - 1].querySelector('img').src
//         v.querySelector('.content').innerText =
//           newsletters[newsletters.length - 1].querySelector(
//             '.content'
//           ).innerText
//       } else {
//         let prevCard = { ...currentCard }
//         currentCard = {
//           title: newsletters[i].querySelector('.title').innerText,
//           src: newsletters[i].querySelector('img').src,
//           content: newsletters[i].querySelector('.content').innerText
//         }

//         v.querySelector('.title').innerText = prevCard.title
//         v.querySelector('img').src = prevCard.src
//         v.querySelector('.content').innerText = prevCard.content
//       }
//     })
//   }
// }
