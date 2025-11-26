const tilmeldbtn = document.getElementById('tilmeld');
tilmeldbtn.addEventListener('click', ToogleModal);

const lukbtn = document.getElementById('close');
lukbtn.addEventListener('click', ToogleModal);

function ToogleModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
}

const submitbtn = document.getElementById('FormSubmit');
submitbtn.addEventListener('click', (event) => {
    console.log('Submit button clicked');
    event.preventDefault();

    const navn = document.getElementById('name').value;
    console.log(navn)

    const mail = document.getElementById('email').value;
    console.log(mail)
});