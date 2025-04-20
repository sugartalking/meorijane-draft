const sections = document.querySelectorAll('.section');
let currentSection = 0;
const totalSections = sections.length;
let isScrolling = false;

function scrollToSection(index) {
  if (index >= 0 && index < totalSections && !isScrolling) {
    isScrolling = true;

    // Remove .active from all sections
    sections.forEach(section => section.classList.remove('active'));

    // Add .active to the current section
    sections[index].classList.add('active');

    // Scroll to the section smoothly
    sections[index].scrollIntoView({ behavior: 'smooth' });

    currentSection = index;

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }
}

// Initialize first section as active
sections[0].classList.add('active');

// Mouse wheel scroll
window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    scrollToSection(currentSection + 1);
  } else {
    scrollToSection(currentSection - 1);
  }
});

// Touch scroll for mobile
let touchStartY = 0;

window.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});

window.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  const deltaY = touchStartY - touchEndY;

  if (Math.abs(deltaY) > 50) {
    if (deltaY > 0) {
      scrollToSection(currentSection + 1);
    } else {
      scrollToSection(currentSection - 1);
    }
  }
});

// Disable context menu on header and title images
document.addEventListener('contextmenu', function (e) {
  if (
    e.target.tagName === 'IMG' &&
    (e.target.classList.contains('page-title') || e.target.classList.contains('header'))
  ) {
    e.preventDefault();
  }
});
