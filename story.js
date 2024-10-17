
document.getElementById('feedback-form').style.display = 'none';

setTimeout(function() {
  document.getElementById('feedback-form').style.display = 'block';
  document.querySelector('.cancel-button').style.display = 'none'; 
}, 238800);


const form = document.getElementById('form');
const result = document.getElementById('result');
const cancelButton = document.querySelector('.cancel-button');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";
  result.style.display = "block";

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      result.innerHTML = "Form submitted successfully";
      result.classList.add('pop-out');
      result.style.color = 'green';

      setTimeout(function() {
        document.getElementById('feedback-form').style.display = 'none';
        
        setTimeout(function() {
          document.getElementById('feedback-form').style.display = 'block';
          cancelButton.style.display = 'block';
        }, 420000);
      }, 1500); 
    } else {
      console.log(response);
      result.innerHTML = json.message;
      result.style.color = 'red';
    }
  })
  .catch(error => {
    console.log(error);
    result.innerHTML = "Something went wrong!";
    result.style.color = 'red';
  })
  .then(function() {
    form.reset();
    setTimeout(() => {
      result.classList.remove('pop-out');
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    }, 3000);
  });
});


cancelButton.addEventListener('click', function() {
  document.getElementById('feedback-form').style.display = 'none';
});

//My story placeholder detector!
const storyInput = document.getElementById('message');
const storyOptions = [
  "The Mask of a Prince",
  "The Stingy Brother",
  "King Malakai",
  "From Darkness to Light",
  "The King's Fall and the Rise of Justice",
  "The Clockmaker's Secret"
];

storyInput.addEventListener('input', function() {
  const userInput = storyInput.value.trim();
  const storyFound = storyOptions.includes(userInput);

  if (storyFound) {
    storyInput.style.color = 'black';
    storyInput.style.backgroundColor = 'initial';
    storyInput.placeholder = `You chose: ${userInput}`;
  } else {
    storyInput.style.color = 'red';
    storyInput.style.backgroundColor = '#ffcccc';
    storyInput.placeholder = 'Story not found!';
  }
});


function validateEmail() {
    const emailInput = document.getElementById('email').value;
    const resultDiv = document.getElementById('result');
    
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput)) {
        resultDiv.textContent = 'Please enter a valid email address.';
        resultDiv.style.color = 'red';
        return false; 
    } else {
        resultDiv.textContent = 'Email is valid! Your feedback has been submitted.';
        resultDiv.style.color = 'green';
        return true; 
    }
}
