
// Not In Use Function -------------------------

export function searchPosts() {

    document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    let extraSearchInput = document.getElementById('search-input2');
    const allContainers = document.querySelectorAll('#post-container'); // All containers with cards
    // console.log(allContainers, searchInput.value)
    const location = (window.location.pathname === '/feed/')
    
    // Event listener for filtering cards across all containers
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      // console.log(filter)
  
      allContainers.forEach(container => {
        const cards = container.getElementsByClassName('col-md-6');
        // console.log(cards)
        for (let card of cards) {
          const title = card.querySelector('.card-title').textContent.toLowerCase();
          const body = card.querySelector('.card-text').textContent.toLowerCase();
  
          // Check if the card matches the filter
          if (title.includes(filter) || body.includes(filter)) {
            card.style.display = ''; // Show card
          } else {
            card.style.display = 'none'; // Hide card
          }
        }
      });
    });

    if (location) {
      extraSearchInput.addEventListener('input', () => {
        const filter = extraSearchInput.value.toLowerCase();
        // console.log(filter)
    
        allContainers.forEach(container => {
          const cards = container.getElementsByClassName('col-md-6');
          // console.log(cards)
          for (let card of cards) {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const body = card.querySelector('.card-text').textContent.toLowerCase();
    
            // Check if the card matches the filter
            if (title.includes(filter) || body.includes(filter)) {
              card.style.display = ''; // Show card
            } else {
              card.style.display = 'none'; // Hide card
            }
          }
        });
      });
    }
    

    // Prevent default form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => e.preventDefault());
  });
  
}


  