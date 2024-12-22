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
              alert('Full Name should only contain letters.');
              isValid = false;
          }
          if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
              alert('Invalid email format.');
              isValid = false;
          }
          if (!/^\d{10}$/.test(phone.value)) {
              alert('Phone number must be 10 digits.');
              isValid = false;
          }
          if (age.value < 13 || age.value > 100) {
              alert('Age must be between 13 and 100.');
              isValid = false;
          }
          if (isValid) {
              alert('Form submitted successfully!');
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


});
