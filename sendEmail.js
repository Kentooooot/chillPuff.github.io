document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    var formData = {
        fullname: document.getElementById("fullname").value,
        address: document.getElementById("address").value,
        email: document.getElementById("email").value,
        quantity: document.getElementById("quantity").value
    };

    // Send email using SMTP.js
    Email.send({
        SecureToken: "your_secure_token", // You need to replace this with your own secure token
        To: "kentpinayan@gmail.com", // Your email where you want to receive orders
        From: "sender_email@gmail.com", // Sender's email address
        Subject: "New Order",
        Body: "Full Name: " + formData.fullname + "<br>" +
              "Address: " + formData.address + "<br>" +
              "Email: " + formData.email + "<br>" +
              "Quantity: " + formData.quantity
    }).then(
        // If email is sent successfully
        function(message) {
            console.log("Email sent successfully:", message);
            alert("Order submitted successfully!");
            // You can also show a success message on the page if needed
        }
    ).catch(
        // If an error occurs
        function(error) {
            console.error("Error sending email:", error);
            alert("Failed to submit order. Please try again later.");
        }
    );
});
