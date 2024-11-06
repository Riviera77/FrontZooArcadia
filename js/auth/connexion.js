// Description: Script pour la page de connexion
const mailInput = document.getElementById('EmailInput');
const passwordInput = document.getElementById('PasswordInput');
const btnSignIn = document.getElementById('btnSignin');

btnSignIn.addEventListener('click', checkCredentials);

function checkCredentials() {
	// infos factices pour le test; il faudra appeler l'API pour vérifier les credentials en BDD
	if (mailInput.value == 'test@mail.com' && passwordInput.value == 'Mimo@123') {
		// Il faudra récupérer le vrai token de l'utilisateur connecté
		const token = 'hjgidsdljgrkjkgfjhkjhjshdjshfkd';
		// Placer ce token en cookie pour les prochaines requêtes
		setToken(token);
		//Attribuer un role à l'utilisateur pour gérer les droits d'accès
		setCookie(roleCookieName, 'admin', 7);
		// Rediriger l'utilisateur vers la page d'accueil si connexion réussie
		window.location.replace('/');
	} else {
		alert('Identifiants incorrects');
		mailInput.classList.add('is-invalid');
		passwordInput.classList.add('is-invalid');
	}
}
