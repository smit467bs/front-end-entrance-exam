import '../css/style.css';


document.addEventListener('mousemove', (e) => {
  const container = document.querySelector('.__container');
  const cv = document.querySelector('.__cv');
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;

  const maxAngle = 15;

  const rotateY = deltaX * maxAngle;
  const rotateX = -deltaY * maxAngle;

  cv.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

