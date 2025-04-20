// SECTION SCROLL BEHAVIOR
const sections = document.querySelectorAll('.section');
const wrapper = document.getElementById('sections-wrapper');
let currentSection = 0;
const totalSections = sections.length;
let isScrolling = false;

function scrollToSection(index) {
  if (index >= 0 && index < totalSections && !isScrolling) {
    isScrolling = true;
    wrapper.style.transform = `translateY(-${index * 100}vh)`;
    currentSection = index;
    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }
}

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    scrollToSection(currentSection + 1);
  } else {
    scrollToSection(currentSection - 1);
  }
});


//DELAYED VISIBILITY TRIGGERED EACH SECTION
function scrollToSection(index) {
  if (index >= 0 && index < totalSections && !isScrolling) {
    isScrolling = true;

    // Remove .active from all sections
    sections.forEach(section => section.classList.remove('active'));

    // Add .active to the current section
    sections[index].classList.add('active');

    wrapper.style.transform = `translateY(-${index * 100}vh)`;
    currentSection = index;

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }
}

// Initialize first section as active
sections[0].classList.add('active');

//MOBILE TOUCH EVENTS
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

//NO SAVE IMG
  document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('page-title')) {
      e.preventDefault();
    }
  });
  
    document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('header')) {
      e.preventDefault();
    }
  });