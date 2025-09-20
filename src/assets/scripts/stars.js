// const motionOK = window.matchMedia(
//   "(prefers-reduced-motion: no-preference)",
// ).matches;

// if (motionOK) {
//   const stars = document.querySelector("footer .stars");

//   let targetX = 0;
//   let targetY = 0;
//   let currentX = 0;
//   let currentY = 0;
//   const speed = 0.05;

//   document.addEventListener("mousemove", (e) => {
//     const { innerWidth, innerHeight } = window;
//     const x = e.clientX / innerWidth - 0.5;
//     const y = e.clientY / innerHeight - 0.5;

//     targetX = x * 50;
//     targetY = y * 35;
//   });

//   function animate() {
//     currentX += (targetX - currentX) * speed;
//     currentY += (targetY - currentY) * speed;

//     stars.style.transform = `translate(${currentX}px, ${currentY}px)`;

//     requestAnimationFrame(animate);
//   }

//   animate();
// }
