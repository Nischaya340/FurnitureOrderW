document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const product = document.getElementById('product').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    if (product && rating && comment) {
        // Create review object
        const review = {
            product: product,
            rating: rating,
            comment: comment
        };

        // Get existing reviews from localStorage or create a new array
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

        // Add the new review to the reviews array
        reviews.push(review);

        // Save the updated reviews array back to localStorage
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Notify the user that the review was submitted
        alert("Thank you for your review!");

        // Clear the form
        document.getElementById('reviewForm').reset();
    } else {
        alert("Please fill in all fields before submitting your review.");
    }
});
