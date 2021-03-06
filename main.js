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

var $showScore = document.querySelector('.score')

document.addEventListener('keypress', function(event) {
    if ($currentChar === null) {
      var $wrong = document.querySelectorAll('span.wrong').length
      $showScore.textContent = '# of incorrect characters: ' + $wrong
    } else if (event.key === $currentChar.textContent) {
      $currentChar.classList.add('correct')
      $currentChar = $currentChar.nextSibling
    } else {
      $currentChar.classList.add('wrong')
    }
})
