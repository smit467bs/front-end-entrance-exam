import '../css/style.css';

document.addEventListener('DOMContentLoaded', function() {
  const saveButton = document.getElementById('saveButton');
  const editableElements = document.querySelectorAll('.__editable');
  const downloadButton = document.getElementById('downloadButton');

  function saveContent(element) {
    const id = element.getAttribute('data-id');
    if (id) {
      localStorage.setItem(id, element.innerHTML);
    }
  }

  saveButton.addEventListener('click', () => {
    editableElements.forEach(element => {
      saveContent(element);
    });
    alert('Changes saved!');
  });

  editableElements.forEach(element => {
    const id = element.getAttribute('data-id');
    if (id) {
      const savedContent = localStorage.getItem(id);
      if (savedContent) {
        element.innerHTML = savedContent;
      }
    }

    element.addEventListener('blur', () => {
      saveContent(element);
    });
  });
  downloadButton.addEventListener('click', () => {
    window.location.href = '/cv.pdf';
  });
});


// document.addEventListener('mousemove', (e) => {
//   const container = document.querySelector('.__container');
//   const cv = document.querySelector('.__cv');
//   const rect = container.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;
//
//   const centerX = rect.width / 2;
//   const centerY = rect.height / 2;
//
//   const deltaX = (x - centerX) / centerX;
//   const deltaY = (y - centerY) / centerY;
//
//   const maxAngle = 15;
//
//   const rotateY = deltaX * maxAngle;
//   const rotateX = -deltaY * maxAngle;
//
//   cv.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
// });

