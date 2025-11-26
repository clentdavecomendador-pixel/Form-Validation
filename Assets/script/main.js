// Get the modal element and buttons
const tilmeldbtn = document.getElementById('tilmeld');
tilmeldbtn.addEventListener('click', ToogleModal);

// Get the close button
const lukbtn = document.getElementById('close');
lukbtn.addEventListener('click', ToogleModal);

// Made a function to toggle the modal visibility
function ToogleModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
}

// Get the submit button and add event listener
const submitbtn = document.getElementById('FormSubmit');
submitbtn.addEventListener('click', (event) => {
    // Default prevented
    event.preventDefault();

    // Get the name and email values
    const navn = document.getElementById('name').value;
    console.log(navn)
    const mail = document.getElementById('email').value;
    console.log(mail)

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (navn.length < 2) {
        return false;
    };
    if (!emailRegex.test(mail)) 
       return false;
});