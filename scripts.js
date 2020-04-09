function numSameElements() {
  //if input is equal to the actual letter, alert them they got it right
  const sameElementsList = document.querySelectorAll('p')
  const div = document.getElementById("one");
  div.innerText = `There are ${sameElementsList.length} paragraph tags on this page.`
}

document.getElementById('runOne').addEventListener('click', e => {
  numSameElements();
})

function numElementsInFirst() {
  //if input is equal to the actual letter, alert them they got it right
  const elementsList = document.getElementById("ayy").children
  const div = document.getElementById("two");
  div.innerText = `There are ${elementsList.length} elements inside the first ID.`
}

document.getElementById('runTwo').addEventListener('click', e => {
  numElementsInFirst();
})

function numElementsInSecond() {
  //if input is equal to the actual letter, alert them they got it right
  const elementsList = document.getElementById("lmao").children
  const div = document.getElementById("three");
  div.innerText = `There are ${elementsList.length} elements inside the second ID.`
}

document.getElementById('runThree').addEventListener('click', e => {
  numElementsInSecond();
})