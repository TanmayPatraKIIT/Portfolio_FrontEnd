function openTab(event, tabName) {
    var i, tabContent, tabLinks;

    // Hide all content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove active class from all tabs
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the clicked tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Show default tab
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("skills").style.display = "block";
});