var myVar;
// Set Timeout for 0.5 seconds after that show the page
function myFunction() {
    myVar = setTimeout(showPage, 200);
}

// Showing the loader first, then show the main page
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myPage").style.display = "block";
}