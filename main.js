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

document.addEventListener('keypress', function(event) {
    if (event.key === $currentChar.textContent) {
      console.log('correct')
      $currentChar.style = 'color: #1e90ff; font-size: 19px'
      $currentChar = $currentChar.nextSibling
    } else {
      console.log('try again')
      $currentChar.style = 'color: #ff0000; font-size: 19px'
    }
})
