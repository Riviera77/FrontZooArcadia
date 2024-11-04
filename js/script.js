const tokenCookieName = 'accesstoken';

// crée une fonction qui permet de récupérer le token dans le cookie valable 7 jours
function setToken(token) {
	setCookie('tokenCookieName', token, 7);
}

// crée une fonction qui permet de retourner le cookie du token
function getToken() {
	return getCookie('tokenCookieName');
}

// crée une fonction qui permet d'installer le cookie, le récupérer et le supprimer
function setCookie(name, value, days) {
	let expires = '';
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
	let nameEQ = name + '=';
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// fonction pour savoir si l'utilisateur est connecté
function isConnected() {
	if (getToken() == null || getToken == undefined) {
		return false;
	} else {
		return true;
	}
}
// J'appelle ma méthode isConnected pour savoir si l'utilisateur est connecté
if (isConnected()) {
	alert('Vous êtes connecté');
} else {
	alert("Vous n'êtes pas connecté");
}
