$(document).ready(function() {
    // Form submission handling
    $('#orderForm').on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Basic validation
        
        const email = $('#email').val().trim();
        const name = $('#name').val().trim();
        const burger = $('#burger').val();
        const quantity = $('#quantity').val();

        if (!email || !name || !burger || quantity < 1) {
            $('#responseMessage').text('Please fill all fields correctly. Quantity must be at least 1.').addClass('error');
            return;
        }

        // If validation passes, submit via Formspree
        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                $('#responseMessage')
                    .text('Order submitted successfully! Thank you!')
                    .removeClass('error')
                    .addClass('success');
                $('#orderForm')[0].reset(); // Clear the form
            },
            error: function() {
                $('#responseMessage')
                    .text('Error submitting order. Please try again.')
                    .addClass('error');
            }
        });
    });

    // Real-time input validation (optional)
    $('#email, #name, #burger, #quantity').on('input', function() {
        const email = $('#email').val().trim();
        const name = $('#name').val().trim();
        const burger = $('#burger').val();
        const quantity = $('#quantity').val();

        if (email && name && burger && quantity >= 1) {
            $('.btn').prop('disabled', false);
        } else {
            $('.btn').prop('disabled', true);
        }
    });
});