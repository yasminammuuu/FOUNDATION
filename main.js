javascript
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // You can perform further validation and send the data to your server here.
    // For this example, we'll just display the data in an alert.
    alert("Username: " + username + "\nEmail: " + email);
});
