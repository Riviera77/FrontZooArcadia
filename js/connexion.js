// Implémenter le JS de ma page connexion
// récupérer les éléments du DOM
const inputUsername = document.getElementById('UsernameInput');
const inputPassword = document.getElementById('PasswordInput');
const submitButton = document.getElementById('btn-validation-connexion');

// Ajouter un écouteur d'événement sur les champs de saisie
inputUsername.addEventListener('keyup', validateForm);
inputPassword.addEventListener('keyup', validateForm);

// Fonction de validation du formulaire
function validateForm(params) {
	const usernameOk = validateRequired(inputUsername);
	const mailOk = validateMail(inputUsername);
	const passwordOk = validatePassword(inputPassword);

	if (usernameOk && passwordOk && mailOk) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
}
// validation de l'email avec création d'un regex
function validateMail(input) {
	//définir mon regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

// validation du mot de passe avec création d'un regex
function validatePassword(input) {
	//définir mon regex
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
	const passwordUser = input.value;

	if (passwordUser.match(passwordRegex)) {
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
