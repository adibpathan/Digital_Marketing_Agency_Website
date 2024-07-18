let submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let form = document.getElementById('myForm')
    let email = document.getElementById("email").value;
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;

    let emailError = document.getElementById("emailError")
    let firstNameError = document.getElementById("firstNameError")
    let lastNameError = document.getElementById("lastNameError")
    let error = document.querySelectorAll('.error')


    // Clear previous error 
    error.forEach((currValue)=>{
        currValue.innerText = ""
    })

    let isValid = true

    // Regular Expression 
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let firstNameRegex = /^[A-Za-z]+$/;
    let lastNameRegex = /^[A-Za-z]+$/;


    if(!emailRegex.test(email)){
        emailError.innerText = "please enter a valid email"
        isValid = false
    }

    if(!firstNameRegex.test(firstName)){
        firstNameError.innerText = "please enter a valid first name"
        isValid = false;
    }

    if(!lastNameRegex.test(lastName)){
        lastNameError.innerText = "please enter a valid last name"
        isValid = false;
    }

    if(isValid){
        alert("Thank you for submitting the form")
        form.reset()
        contactSection.classList.add('hide')
    }
});

let contactBtn = document.getElementById("contact-btn")
let contactSection = document.querySelector(".main-contact")
let body = document.body;

contactBtn.addEventListener('click', (e)=>{
    if(contactSection.classList.contains('hide')){
        contactSection.classList.remove('hide')
    }else{
        contactSection.classList.add('hide')
    }
})


let removeContact = document.getElementById("remove-contact")

removeContact.addEventListener('click', ()=>{
    contactSection.classList.add('hide')
})

let projectContents = document.getElementsByClassName('projects-contents');
let projectImage = document.getElementById('project-image');

// Function to remove active class from all projectContents
function removeActiveClass() {
  Array.from(projectContents).forEach((project) => {
    project.classList.remove('active');
  });
}


Array.from(projectContents).forEach((project) => {
  project.addEventListener('click', (e) => {
    // Remove active class from all projectContents
    removeActiveClass();
    // Add active class to the clicked projectContents
    project.classList.add('active');

    // Update the project image
    let imageSrc = project.getAttribute('data-image');
    projectImage.setAttribute('src', imageSrc);
  });
});




