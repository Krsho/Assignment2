//Dropdown
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown');

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    }
});

//Drag and Drop
document.addEventListener("DOMContentLoaded", () => {
    function allowDrop(ev) {
      ev.preventDefault();
    }
  
    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
  
    function drop(ev) {
      ev.preventDefault();
      const data = ev.dataTransfer.getData("text");
      ev.target.innerHTML = "";
      ev.target.appendChild(document.getElementById(data));
    }
  
    const card = document.getElementById("card");
    const placeholder = document.getElementById("placeholder");
  
    card.addEventListener("dragstart", drag);
    placeholder.addEventListener("dragover", allowDrop);
    placeholder.addEventListener("drop", drop);
  });


  //Gallery
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.getElementById('close');
    const thumbnails = document.querySelectorAll('.thumbnail');

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
  });


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
const accordionBtnToggle = document.querySelectorAll(".accordion-card__header");
for (i of accordionBtnToggle) {
  i.addEventListener("click", accordionToggleFunction);
}
function accordionToggleFunction() {
  this.nextElementSibling.classList.toggle("active");
  this.children[0].classList.toggle("toggleIcon");
}


// Theme Toggle
document.getElementById('toggle-dark-theme').addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
      this.textContent = 'Switch to Light Theme';
  } else {
      this.textContent = 'Switch to Dark Theme';
  }
});

