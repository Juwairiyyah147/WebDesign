// script.js
function changeImage(imagePath) {
    document.getElementById('projectImage').src = imagePath;
}
$(document).ready(function() {
    // To Handle form submission
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Gathering form data
        var formData = $(this).serialize();

        // Getting the form action URL
        var formAction = $(this).attr('action');

        // Sending the form data using an AJAX request
        $.ajax({
            type: 'POST',
            url: formAction,
            data: formData,
            success: function(response) {
                // To handle successful form submission
                alert('Form submitted successfully!');
                // To cllose the modal
                $('#contactModal').modal('hide');
                // Reset the form
                $('#contactForm')[0].reset();
            },
            error: function(error) {
                // Handle errors
                alert('There was an error submitting the form. Please try again.');
            }
        });
    });

    // Showing the modal on button click
    $('.contactUsBtn').on('click', function() {
        $('#contactModal').modal('show');
    });
    
    $('#contactModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget);
        var recipient = button.data('whatever');
        var modal = $(this);
        modal.find('.modal-title').text('Talk to us');
    });

     // Initializing the carousel
     $('#whatWeDoCarousel').carousel({
        interval: 3000 // Slide interval in milliseconds
    });

   

    
});
