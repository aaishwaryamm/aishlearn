document.addEventListener("DOMContentLoaded", function() {
    const blockchainLink = document.querySelector(".dropdown-content a[href='#']");
    const targetSection = document.querySelector(".animation img[src='ss.jpg']");

    blockchainLink.addEventListener("click", function(event) {
        event.preventDefault();
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const defiLink = document.querySelector(".dropdown-content a:nth-child(2)"); // Select the second <a> element
    const s1Section = document.querySelector(".scrolld img[src='S1.jpg']");

    defiLink.addEventListener("click", function(event) {
        event.preventDefault();
        s1Section.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const smartContractLink = document.querySelector(".dropdown-content a:nth-child(3)"); // Select the third <a> element
    const sImageSection = document.querySelector(".animation img[src='s.jpg']");

    smartContractLink.addEventListener("click", function(event) {
        event.preventDefault();
        sImageSection.scrollIntoView({ behavior: "smooth" });
    });
});



