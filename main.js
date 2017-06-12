var $phrase = document.querySelector('#exercise1')

var phrase = '"Life is short. Smile while you still have teeth."'
var chars = phrase.split('')

for (var i = 0; i < chars.length; i++) {
  var $char = document.createElement('span')
  $char.textContent = chars[i]
  $phrase.appendChild($char)
}




// Create span tags in DOM
// Put each character in individual span tags
// append each of those span tags to desired element
