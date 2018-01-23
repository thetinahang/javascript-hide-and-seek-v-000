function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  var ul = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ul.length; i++) {
    ul[i].textContent = parseInt(ul[i].textContent) + n
  } return ul
}
