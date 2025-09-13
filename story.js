
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
  "The Clockmaker's Secret",
  "The Whispering Library",
  "Saffron Skies",
  "Ember and the River"
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

// Simple client-side search filter for <details> by <summary> text
const searchInput = document.getElementById('search');
const storiesContainer = document.getElementById('stories');
if (searchInput && storiesContainer) {
  const allDetails = Array.from(storiesContainer.querySelectorAll('details'));
  const sortSelect = document.getElementById('sort');
  // Build tag filter chips
  const tagFiltersRoot = document.getElementById('tag-filters');
  if (tagFiltersRoot) {
    const tagSet = new Set();
    allDetails.forEach(d => {
      (d.getAttribute('data-tags') || '')
        .split(',')
        .map(t => t.trim())
        .filter(Boolean)
        .forEach(t => tagSet.add(t));
    });
    const selectedTags = new Set();
    tagSet.forEach(tag => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'tag-chip';
      chip.setAttribute('aria-pressed', 'false');
      chip.textContent = tag;
      chip.addEventListener('click', () => {
        if (selectedTags.has(tag)) {
          selectedTags.delete(tag);
          chip.classList.remove('active');
          chip.setAttribute('aria-pressed', 'false');
        } else {
          selectedTags.add(tag);
          chip.classList.add('active');
          chip.setAttribute('aria-pressed', 'true');
        }
        applyFilters();
      });
      tagFiltersRoot.appendChild(chip);
    });

    function matchesTags(d) {
      if (selectedTags.size === 0) return true;
      const tags = new Set((d.getAttribute('data-tags') || '')
        .split(',')
        .map(t => t.trim())
        .filter(Boolean));
      for (const t of selectedTags) {
        if (!tags.has(t)) return false;
      }
      return true;
    }

    function matchesQuery(d, query) {
      if (!query) return true;
      const title = (d.querySelector('summary')?.textContent || '').toLowerCase();
      return title.includes(query);
    }

    function applyFilters() {
      const query = searchInput.value.trim().toLowerCase();
      allDetails.forEach(d => {
        const visible = matchesQuery(d, query) && matchesTags(d);
        d.style.display = visible ? '' : 'none';
      });
    }

    // Search ties into same filter application
    searchInput.addEventListener('input', applyFilters);

    // Sorting
    if (sortSelect) {
      const originalOrder = Array.from(allDetails);
      sortSelect.addEventListener('change', () => {
        const value = sortSelect.value;
        if (value === 'default') {
          originalOrder.forEach(node => storiesContainer.appendChild(node));
        } else {
          const visibleDetails = Array.from(storiesContainer.querySelectorAll('details'));
          visibleDetails.sort((a, b) => {
            const ta = (a.querySelector('summary')?.textContent || '').toLowerCase();
            const tb = (b.querySelector('summary')?.textContent || '').toLowerCase();
            if (value === 'az') return ta.localeCompare(tb);
            if (value === 'za') return tb.localeCompare(ta);
            return 0;
          }).forEach(node => storiesContainer.appendChild(node));
        }
      });
    }
  }
}
