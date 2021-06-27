// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function (){
  const likeButtons = document.getElementsByClassName('like-glyph');
  liked(likeButtons);
});

function liked(buttons) {
  for(const button of buttons) {
    button.addEventListener('click', cb => {
      heartFullToEmpty(button)
      likeOrUnlike(button);
    });
  };
};

function heartFullToEmpty(heart) {
  const glyph = heart.innerText
  if(glyph == EMPTY_HEART) {
    heart.innerText = FULL_HEART;
  } else {
    heart.innerText = EMPTY_HEART
  }
}

function likeOrUnlike() {
  const errorModal = document.getElementById('modal')
  return mimicServerCall()
  .then(data => {
    console.log(data)
  })
  .catch((error) => {
    console.error(setTimeout(errorModal.removeAttribute('class'), 3000), error)
  })
};

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
