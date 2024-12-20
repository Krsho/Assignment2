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