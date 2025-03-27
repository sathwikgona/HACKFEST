document.addEventListener('DOMContentLoaded', function() {
    // Get the search form elements
    const searchForm = document.querySelector('.d-flex');
    const searchInput = document.querySelector('.form-control.me-2');
    const searchButton = document.querySelector('.btn.btn-outline-success');
    
    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');
    
    // Add event listener to the search form
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        performSearch();
    });
    
    // Add event listener to the search button
    searchButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission
        performSearch();
    });
    
    // Function to perform the search
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') {
            // If search is empty, show all products
            productCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        // Filter products based on search term
        productCards.forEach(card => {
            const productName = card.querySelector('.product-name h5').textContent.toLowerCase();
            
            if (productName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Optional: Add live search as user types
    searchInput.addEventListener('input', function() {
        performSearch();
    });
});