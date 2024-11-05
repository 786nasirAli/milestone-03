const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumedisplayElement = document.getElementById('resume-display') as HTMLElement | null;

if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent form from reloading the page

        // Collect input values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;

        // Generate the resume content dynamically
        const resumeHTML = `
            <h2><b>Editable Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
            <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
            <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>

            <h3>Education</h3>
            <p contenteditable="true">${education}</p>

            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>

            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
        `;

        // Display the generated resume
        if (resumedisplayElement) {
            resumedisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('The resume display element is missing');
        }
    });
} else {
    console.error('Form element not found');
}
