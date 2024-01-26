document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.needs-validation');
    var submitBtn = document.getElementById('submitBtn');
  
    submitBtn.addEventListener('click', function () {

        if (form.checkValidity()) {
            // Clear inputs and show submit text
            clearFormInputs();
            showSubmitText();
        } else {
            // If the form is not valid, show validation messages
            form.classList.add('was-validated');
        }
    });
  
    // Function to clear form inputs
    function clearFormInputs() {
        var inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(function (input) {
            input.value = '';
        });
    }
  
    // Function to show submit text
    function showSubmitText() {
        var submitText = document.getElementById('submit-text');
        // Remove the validation styling
        form.classList.remove('was-validated')
        submitText.style.visibility = 'visible';
  
        // Hide the submit text after 3 seconds
        setTimeout(function () {
            submitText.style.visibility = 'hidden';
        }, 3000);
    }
  });