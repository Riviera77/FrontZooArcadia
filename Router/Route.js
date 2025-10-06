export default class Route {
	constructor(url, title, pathHtml, authorize, pathJS = '') {
		this.url = url;
		this.title = title;
		this.pathHtml = pathHtml;
		this.pathJS = pathJS;
		this.authorize = authorize;
	}
}
/*
[] -> Tout le monde peut y accéder
["disconnected"] -> réservé aux utilisateurs non connectés
["visiteur"] -> réservé aux utilisateurs avec le role "visiteur"
["admin"] -> réservé aux utilisateurs avec le role "admin"
["vétérinaire"] -> réservé aux utilisateurs avec le role "vétérinaire"
["employé"] -> réservé aux utilisateurs avec le role "employé"
*/
