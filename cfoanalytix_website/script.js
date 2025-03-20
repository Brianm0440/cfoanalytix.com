document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully!");
    
    // Add smooth scrolling for the Get Started button
    document.querySelector('.cta-button').addEventListener('click', function(e) {
        e.preventDefault();
        
        const contactSection = document.querySelector('#contact-section');
        contactSection.scrollIntoView({ 
            behavior: 'smooth'
        });
    });
});
