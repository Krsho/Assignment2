document.addEventListener('DOMContentLoaded', function () {
  // Dropdown
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  const dropDownMenu = document.querySelector('.dropdown');

  if (toggleBtn) {
      toggleBtn.onclick = function () {
          dropDownMenu.classList.toggle('open');
          const isOpen = dropDownMenu.classList.contains('open');
          toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      };
  }

  // Drag and Drop
  const card = document.getElementById('card');
  const placeholder = document.getElementById('placeholder');

  function allowDrop(ev) {
      ev.preventDefault();
  }

  function drag(ev) {
      ev.dataTransfer.setData('text', ev.target.id);
  }

  function drop(ev) {
      ev.preventDefault();
      const data = ev.dataTransfer.getData('text');
      ev.target.innerHTML = '';
      ev.target.appendChild(document.getElementById(data));
  }

  if (card && placeholder) {
      card.addEventListener('dragstart', drag);
      placeholder.addEventListener('dragover', allowDrop);
      placeholder.addEventListener('drop', drop);
  }

  // Gallery
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.getElementById('close');
  const thumbnails = document.querySelectorAll('.thumbnail');

  if (modal && modalImage && closeBtn && thumbnails) {
      thumbnails.forEach(thumbnail => {
          thumbnail.addEventListener('click', () => {
              const fullImageSrc = thumbnail.getAttribute('data-full');
              modalImage.src = fullImageSrc;
              modal.style.display = 'flex';
          });
      });

      closeBtn.addEventListener('click', () => {
          modal.style.display = 'none';
      });

      modal.addEventListener('click', (e) => {
          if (e.target === modal) {
              modal.style.display = 'none';
          }
      });
  }

  // Toggle Show/Hide
  const toggleButton = document.getElementById('toggle-button');
  if (toggleButton) {
      toggleButton.addEventListener('click', function () {
          const section = document.getElementById('showhide');
          if (section.style.display === 'none' || section.style.display === '') {
              section.style.display = 'block';
              this.textContent = 'Hide Tournament Info';
          } else {
              section.style.display = 'none';
              this.textContent = 'Show Tournament Info';
          }
      });
  }

  // Toggle Show/Hide 2
  const toggleVideoButton = document.getElementById('toggle-video');
  if (toggleVideoButton) {
      toggleVideoButton.addEventListener('click', function () {
          const videoSection = document.getElementById('showhide2');
          if (videoSection.style.display === 'none' || videoSection.style.display === '') {
              videoSection.style.display = 'block';
              this.textContent = 'Hide Video';
          } else {
              videoSection.style.display = 'none';
              this.textContent = 'Show Video';
          }
      });
  }

  // Accordion
  const accordionBtnToggle = document.querySelectorAll('.accordion-card__header');
  accordionBtnToggle.forEach(button => {
      button.addEventListener('click', function () {
          this.nextElementSibling.classList.toggle('active');
          this.children[0].classList.toggle('toggleIcon');
      });
  });

  // Form Validation
   const tournamentForm = document.getElementById('tournamentForm');
   if (tournamentForm) {
    tournamentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const age = document.getElementById('age');
        const password = document.getElementById('password');

        if (!/^[a-zA-Z\s]+$/.test(fullName.value)) {
            toastr.error('Full Name should only contain letters.', 'Error');
            isValid = false;
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
            toastr.error('Invalid email format.', 'Error');
            isValid = false;
        }
        if (!/^\d{9}$/.test(phone.value)) {
            toastr.error('Phone number must be 9 digits.', 'Error');
            isValid = false;
        }
        if (age.value < 13 || age.value > 100) {
            toastr.error('Age must be between 13 and 100.', 'Error');
            isValid = false;
        }
        if (isValid) {
            toastr.success('Form submitted successfully!', 'Success');
            this.submit();
        }
    });
}


  // Password Strength Checker
  const passwordInput = document.getElementById('password');
  const strengthBar = document.getElementById('passwordStrengthBar');

  if (passwordInput && strengthBar) {
      passwordInput.addEventListener('input', function () {
          const password = passwordInput.value;
          let strength = 0;

          if (password.length >= 8) strength += 25;
          if (/[A-Z]/.test(password)) strength += 25;
          if (/\d/.test(password)) strength += 25;
          if (/[\W_]/.test(password)) strength += 25;

          strengthBar.style.width = `${strength}%`;

          if (strength < 50) {
              strengthBar.className = 'progress-bar bg-danger';
          } else if (strength < 75) {
              strengthBar.className = 'progress-bar bg-warning';
          } else {
              strengthBar.className = 'progress-bar bg-success';
          }
      });
  }

  // Theme Toggle
  const themeToggle = document.getElementById('toggle-dark-theme');
  if (themeToggle) {
      themeToggle.addEventListener('click', function () {
          document.body.classList.toggle('dark-theme');
          this.textContent = document.body.classList.contains('dark-theme')
              ? 'Switch to Light Theme'
              : 'Switch to Dark Theme';
      });
  }

  // Data-Driven Content
  const cardContainer = document.getElementById('cardContainer');

  fetch('data/content.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      data.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('col-md-4', 'mb-4');

        cardElement.innerHTML = `
          <div class="card">
            <img src="${card.image}" class="card-img-top" alt="${card.name}">
            <div class="card-body">
              <h5 class="card-title">${card.name}</h5>
              <p class="card-text">${card.description}</p>
              <p class="card-text"><strong>Price:</strong> ${card.price}</p>
            </div>
          </div>
        `;

        cardContainer.appendChild(cardElement);
      });
    })
    .catch(error => {
      cardContainer.innerHTML = `<p class="text-danger">Failed to load card data: ${error.message}</p>`;
    });

    // Form Submission with AJAX
    $(document).ready(function() {
     $('#tournamentForm').on('submit', function(e) {
        e.preventDefault(); 

        var formData = {
            fullName: $('#fullName').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            age: $('#age').val(),
            experience: $('#experience').val(),
            deck: $('#deck').val(),
            favoriteCard: $('#favoriteCard').val(),
            tournamentPreferences: $('#tournamentPreferences').val(),
            tournamentDate: $('#tournamentDate').val(),
            password: $('#password').val()
        };

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            data: formData,
            success: function(response) {
                toastr.success('Your registration has been successfully submitted!', 'Success');
                $('#tournamentForm')[0].reset();
            },
            error: function() {
                toastr.error('There was an error submitting the form. Please try again later.', 'Error');
            }
        });
      });
    });

      

      // Toastr
      toastr.options = {
        "closeButton": true,
        "debug": false,   
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      };

      
      
      // Weather
      document.getElementById('weatherForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        const city = document.getElementById('city').value.trim();
        const apiKey = '62d4bf1e1e394c8cb8f221419242212 ';
        const weatherResult = document.getElementById('weatherResult');
    
        weatherResult.innerHTML = '<p>Loading...</p>';
    
        try {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
          if (!response.ok) throw new Error('City not found');
    
          const data = await response.json();
          weatherResult.innerHTML = `
            <h4>Weather in ${data.location.name}</h4>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind Speed: ${data.current.wind_kph} kph</p>
          `;
        } catch (error) {
          weatherResult.innerHTML = `<p class="text-danger">${error.message}</p>`;
        }
      });

    
      
      
      

});
