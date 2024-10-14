
// Delay before showing the feedback form
setTimeout(function () {
    const form = document.getElementById('form');
    
    // Check if feedback has been submitted previously
    if (localStorage.getItem('feedbackSubmitted')) {
        form.style.display = 'none'; // Hide the form if feedback has been submitted
    } else {
        form.style.display = 'block'; // Show the form if not submitted
    }
}, 520000);

const result = document.getElementById('result');
result.style.display = "none"; // Hide the result element initially

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";
    result.style.display = "block"; // Show result during submission

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
            result.classList.add('pop-out'); // Add pop-out class
            result.style.color = 'green'; // Change color to green
            
            // Set flag in localStorage to indicate feedback has been submitted
            localStorage.setItem('feedbackSubmitted', 'true'); 
            form.style.display = 'none'; // Hide the form after successful submission
        } else {
            console.log(response);
            result.innerHTML = json.message;
            result.style.color = 'red'; // Change color to red for error messages
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
        result.style.color = 'red'; // Change color to red for error messages
    })
    .then(function() {
        form.reset();
        setTimeout(() => {
            result.classList.remove('pop-out'); // Remove pop-out class after timeout
            setTimeout(() => {
                result.style.display = "none"; // Hide result message after 3 seconds
            }, 3000);
        }, 3000);
    });
});
