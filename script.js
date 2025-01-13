// JavaScript for interactive elements

// Redirect to Services Page
function goToServices() {
    window.location.href = "services.html";
}

// Redirect to Contact Page
function goToContact() {
    window.location.href = "contact.html";
}

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
    // Handle Contact Form Submission
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission behavior
            alert("Thank you for contacting Fazt Home Laundry! We'll respond to your message soon.");
            form.reset(); // Reset the form fields
        });
    }

    // Add hover effect for navigation links
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff6600"; // Highlight link color on hover
        });
        link.addEventListener("mouseout", () => {
            link.style.color = ""; // Reset link color
        });
    });

    // Add dynamic content for the Services section (if present)
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
        const dynamicServices = [
            "Dry Cleaning - High-quality service for delicate fabrics.",
            "Wash and Fold - Convenient and hassle-free.",
            "Ironing - Perfectly pressed clothes for a polished look.",
            "Special Care Fabrics - Gentle treatment for sensitive materials."
        ];

        const serviceList = document.createElement("ul");
        serviceList.className = "services-list"; // Add a class for styling
        dynamicServices.forEach((service) => {
            const listItem = document.createElement("li");
            listItem.textContent = service;
            serviceList.appendChild(listItem);
        });

        servicesSection.appendChild(serviceList);
    }

    // Add "Back to Top" button functionality
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "Back to Top";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.padding = "10px";
    backToTopButton.style.backgroundColor = "#0044cc";
    backToTopButton.style.color = "white";
    backToTopButton.style.border = "none";
    backToTopButton.style.borderRadius = "5px";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none"; // Hidden by default
    backToTopButton.style.zIndex = "1000";

    document.body.appendChild(backToTopButton);

    // Show "Back to Top" button when scrolling down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Smooth scroll to the top when "Back to Top" button is clicked
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
