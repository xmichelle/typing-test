var $phrase = document.querySelector('#exercise1')

var phrase = '"Life is short. Smile while you still have teeth."'
var chars = phrase.split('')

for (var i = 0; i < chars.length; i++) {
  var $char = document.createElement('span')
  $char.textContent = chars[i]
  $phrase.appendChild($char)
}

$phrase.querySelector('span').classList.add('current')
var $currentChar = document.querySelector('.current')



/*
document.addEventListener('keydown', function(event) {
  if (event.key === chars[i]){
    console.log(event.key)
  } else {

  }

})

*/

// Create span tags in DOM
// Put each character in individual span tags
// append each of those span tags to desired element
