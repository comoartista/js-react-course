//Tabs
const tabsParent = document.querySelector('.tabheader__items')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsContent = document.querySelectorAll('.tabcontent')

function hideTabContent(tabheader, tabcontent) {
  tabheader.forEach((item) => {
    item.classList.remove('tabheader__item_active')
  })

  tabcontent.forEach((item) => {
    item.style.display = 'none'
  })
}

function showTabContent(tabheader, tabcontent) {
  tabheader.classList.add('tabheader__item_active')
  tabcontent.style.display = 'block'

}

hideTabContent(tabs, tabsContent) 
showTabContent(tabs[0], tabsContent[0])

tabsParent.addEventListener('click', (event) => {
  const target = event.target
  if(target && target.classList.contains('tabheader__item')) {
    console.log('click');
    tabs.forEach((item, i) => {
      if(item === target) {
        hideTabContent(tabs, tabsContent) 
        showTabContent(item, tabsContent[i])
      }
    })
  }
})


// Timer
const deadline = '2023-09-01'

function getTimerRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (24 * 60 * 60 * 1000)),
        hours = Math.floor((t / (60 * 60 * 1000) % 24)),
        minutes = Math.floor((t / (60 * 1000) % 60)),
        seconds = Math.floor((t / 1000) % 60);

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds 
  }
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`
  } else {
    return num
  }
}

function setClock(selector, endtime)  {
  const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000)

  updateClock() 

  function updateClock() {
    const t = getTimerRemaining(endtime)


    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);;  
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if(t.total <= 0) {
      clearInterval(timeInterval)
    }
  }
}

setClock('.timer', deadline)

//Modal 
const btns = document.querySelectorAll('#btn')
const modal = document.querySelector('.modal')
const modalClose= document.querySelector('.modal__close')

function openModal() {
  modal.style.display = 'block'
  document.body.style.overflow = 'hidden'
  // clearInterval(timerId)
} 

function closeModal() {
  modal.style.display = 'none'
  document.body.style.overflow = ''
}

 btns.forEach(btn => {
  btn.addEventListener('click', openModal)
 })

 modalClose.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal()
  }
})


document.addEventListener('keydown' , (e) => {
  if (e.code === 'Escape' && (modal.style.display = 'block')) {
    closeModal()
  }
})

// const timerId = setTimeout(openModal, 2000)

// window.addEventListener('scroll', () => {
//   if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
//     openModal()
//   }
// }, {once: true})

function showModalByScroll () {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
    openModal()
    window.removeEventListener('scroll', showModalByScroll)
  }
}

window.addEventListener('scroll', showModalByScroll)
