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

var $score = document.createElement('div')
$phrase.appendChild($score)
$phrase.querySelector('div').classList.add('score')
var $showScore = document.querySelector('.score')

document.addEventListener('keypress', function(event) {
    if ($currentChar === null) {
    //var $correct = document.querySelectorAll('span.correct').length
      var $wrong = document.querySelectorAll('span.wrong').length
    //$correct = document.querySelectorAll('span').length - $wrong
      console.log($wrong)
    //console.log($correct)
    } else if (event.key === $currentChar.textContent) {
      $currentChar.classList.add('correct')
      $currentChar = $currentChar.nextSibling
      console.log('correct')
    } else {
      $currentChar.classList.add('wrong')
      console.log('wrong')
    }
})



// Step 1 Count the number or errors and correct inputs
// Step 2 The count needs to be displayed for the user

// total characters - # wrong = # correct
