window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header'); // This is your top fixed bar
    const searchBar = document.getElementById('search-bar-container');
    const contentHeader = document.querySelector('.header'); // This is the orange "HEADER" div

    if (!header || !searchBar || !contentHeader) {
      console.error("Make sure your header has the ID 'main-header', your search bar container has the ID 'search-bar-container', and your content header has the class 'header'.");
      return;
    }

    const contentHeaderBottom = contentHeader.offsetTop + contentHeader.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > contentHeaderBottom) {
      searchBar.style.display = 'inline-block';
    } else {
      searchBar.style.display = 'none';
    }
  });

  /* document.addEventListener('DOMContentLoaded', function() {
    const bikeList = document.querySelector('.bike-list');
    const scrollLeftButton = document.querySelector('.scroll-left');
    const scrollRightButton = document.querySelector('.scroll-right');

    if (bikeList && scrollLeftButton && scrollRightButton) {
        scrollLeftButton.addEventListener('click', function() {
        bikeList.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust the scroll amount as needed
        });

        scrollRightButton.addEventListener('click', function() {
        bikeList.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust the scroll amount as needed
        });
    }
    }); */
    document.addEventListener('DOMContentLoaded', function() {
// Function to handle horizontal scrolling for a given bike list and buttons
function setupBikeListScrolling(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const bikeList = section.querySelector('.bike-list');
    const scrollLeftButton = section.querySelector('.scroll-left');
    const scrollRightButton = section.querySelector('.scroll-right');

    if (bikeList && scrollLeftButton && scrollRightButton) {
    scrollLeftButton.addEventListener('click', function() {
        bikeList.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust scroll amount as needed
    });

    scrollRightButton.addEventListener('click', function() {
        bikeList.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust scroll amount as needed
    });
    }
    }
    // Set up scrolling for the "Đang cho thuê" section
    setupBikeListScrolling('.frequently-booked');

    // Set up scrolling for the "Xe được thuê gần đây" section
    setupBikeListScrolling('.recently-booked');
    });