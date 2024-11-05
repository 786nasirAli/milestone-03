// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumedisplayElemant = document.getElementById('resume-form');
// Handle form submission
form.addEventListener('submit', function (event) {
    // collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('name').value;
    var phone = document.getElementById('name').value;
    var education = document.getElementById('name').value;
    var exprience = document.getElementById('name').value;
    var skils = document.getElementById('name').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Editable Resume<b></h2>\n    <h3>Personal Information</h3>\n\n    <p><b>Name:<b><span contenteditable=\"true\"".concat(name, "</span></P>\n    <p><b>Name:<b><span contenteditable=\"true\"").concat(email, "</span></P>\n    <p><b>Name:<b><span contenteditable=\"true\"").concat(education, "</span></P>\n\n    <h3>Eduction</h3>\n    <p contenteditable=\"true\">").concat(exprience, "</p>\n    \n    <h3 >Exprience</h3>\n    <p contenteditable=\"true\">").concat(exprience, "</p>\n\n    <h3>skills</h3>\n    <p contenteditable=\"true\">").concat(skils, "</p>\n    \n    \n    ");
    // Display the  generated resume
    if (resumedisplayElemant) {
        resumedisplayElemant.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing ');
    }
});
