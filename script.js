$(document).ready(() => {
  var element = document.querySelector('.button')
  var content = document.getElementsByClassName('nav_content')[0]
  var marker = true
  element.onclick = () => {
    if (marker) {
      element.style.padding = '2.5em 15em 0 15em'
      setTimeout(() => {content.style.transform = 'rotateX(0deg)'}, 500)
      marker = false
    }
    else {
      content.style.transform = 'rotateX(90deg)'
      setTimeout(() => {element.style.padding = '2.5em 1em 0 1em'}, 500)
      marker = true
    }
  }
})
