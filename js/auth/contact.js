// Implémenter le JS de ma page contact
// récupérer les éléments du DOM
const inputPseudo = document.getElementById('PseudoInput');
const inputTitle = document.getElementById('TitleInput');
const inputMessage = document.getElementById('FormControlTextarea');
const inputEmail = document.getElementById('emailInput');
const submitButton = document.getElementById('btn-validation-envoi');

// Ajouter un écouteur d'événement sur les champs de saisie
inputPseudo.addEventListener('keyup', validateForm);
inputTitle.addEventListener('keyup', validateForm);
inputMessage.addEventListener('keyup', validateForm);
inputEmail.addEventListener('keyup', validateForm);

// Fonction de validation du formulaire
function validateForm(params) {
	const pseudoOk = validateRequired(inputPseudo);
	const titleOk = validateRequired(inputTitle);
	const messageOk = validateRequired(inputMessage);
	const mailOk = validateMail(inputEmail);

	if (pseudoOk && titleOk && messageOk && mailOk) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
}

// Fonction de validation de l'email avec création d'un regex
function validateMail(input) {
	//définir mon regex
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	const mailUser = input.value;

	if (mailUser.match(emailRegex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
		return true;
	} else {
		input.classList.add('is-invalid');
		input.classList.remove('is-valid');
		return false;
	}
}

// Fonction de validation des champs requis
function validateRequired(input) {
	if (input.value === '') {
		input.classList.add('is-invalid');
		input.classList.remove('is-valid');
		return false;
	} else {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
		return true;
	}
}
