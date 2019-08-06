var myVar;
// Set Timeout for 3 seconds after that show the page
function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

// Showing the loader first, then show the main page
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}