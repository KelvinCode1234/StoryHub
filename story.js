
// Hide modal initially
const feedbackForm = document.getElementById('feedback-form');
const modalOverlay = document.getElementById('modal-overlay');
const openFeedbackBtn = document.getElementById('open-feedback-btn');

feedbackForm.style.display = 'none';
modalOverlay.style.display = 'none';

// Function to show modal
function showModal() {
  modalOverlay.style.display = 'block';
  feedbackForm.style.display = 'block';
}

// Show modal when feedback button is clicked
openFeedbackBtn.addEventListener('click', showModal);



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
        hideModal();        
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


// Function to hide modal
function hideModal() {
  modalOverlay.style.display = 'none';
  feedbackForm.style.display = 'none';
}

// Cancel button functionality
cancelButton.addEventListener('click', function() {
  hideModal();
});

// Close modal when clicking overlay
modalOverlay.addEventListener('click', function() {
  hideModal();
});

// Ensure only one story is open at a time
document.addEventListener('DOMContentLoaded', function() {
  const storyDetails = document.querySelectorAll('details');
  
  storyDetails.forEach(detail => {
    detail.addEventListener('toggle', function() {
      if (this.open) {
        // Close all other open details
        storyDetails.forEach(otherDetail => {
          if (otherDetail !== this && otherDetail.open) {
            otherDetail.open = false;
          }
        });
      }
    });
  });
});

//My story placeholder detector!
const storyInput = document.getElementById('message');
const storyOptions = [
  "The Mask of a Prince",
  "The Stingy Brother",
  "King Malakai",
  "From Darkness to Light",
  "The King's Fall and the Rise of Justice",
  "The Clockmaker's Secret",
  "The Last Dragon Slayer",
  "The Academy of Lost Spells",
  "The Curse of the Golden Compass",
  "The Forbidden Kingdom",
  "The Mystery of Blackwood Manor",
  "The Enchanted Forest",
  "The Pirate's Daughter",
  "The Robot's Awakening",
  "The Lost City of Atlantis",
  "The Vampire's Redemption",
  "The Witch's Garden",
  "The Samurai's Honor",
  "The Detective's Last Case",
  "The Mermaid's Choice",
  "The Phoenix's Rebirth",
  "The Wizard's Apprentice"
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

// Search functionality
const searchInput = document.getElementById('search-stories');
const storyItems = document.querySelectorAll('details');

if (searchInput) {
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    storyItems.forEach(item => {
      const title = item.querySelector('summary').textContent.toLowerCase();
      const content = item.textContent.toLowerCase();
      
      if (title.includes(searchTerm) || content.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// Category filter functionality
const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
  button.addEventListener('click', function() {
    const category = this.dataset.category;
    
    // Remove active class from all buttons
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');
    
    storyItems.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
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
