import Route from './Route.js';

//Définir ici vos routes
export const allRoutes = [
	new Route('/', 'Accueil', '/pages/home.html', []),
	new Route('/services', 'services', '/pages/services.html', []),
	new Route('/habitats', 'habitats', '/pages/habitats.html', []),
	new Route('/contact', 'contact', '/pages/contact.html', '/js/auth/contact.js', []),
	new Route('/connexion', 'connexion', '/pages/connexion.html', ['disconnected'], '/js/auth/connexion.js'),
	new Route('/admin', 'admin', '/pages/personnels/admin.html', ['admin']),
	new Route('/hippo-habitat', 'hippo-habitat', '/pages/habitats/hippo/hippo-habitat.html', []),
	new Route('/hippo', 'hippo', '/pages/habitats/hippo/hippo.html', []),
	new Route('/hippo-nain', 'hippo-nain', '/pages/habitats/hippo/hippo-nain.html', []),
	new Route('/nyala', 'nyala', '/pages/habitats/hippo/nyala.html', []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = 'Zoo Arcadia';
