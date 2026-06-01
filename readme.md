# Application Météo - Vue.JS

## Description
Ce projet est l'évolution de l'application Web météo (initialement développée lors des TP précédents) vers le framework Javascript **Vue.js**. L'objectif principal est de remplacer l'approche de jQuery par l'approche de Vue.js pour la manipulation de la vue. 

L'application permet de consulter la météo en temps réel pour n'importe quelle ville, d'accéder à des données atmosphériques détaillées, de visualiser les prévisions sur 5 jours, de consulter une FAQ et d'envoyer un formulaire de contact.

## Technologies Utilisées
L'application repose sur les technologies modernes suivantes :
* **Framework JS : Vue.js 3 (via CDN)** pour la réactivité, le data-binding, et la gestion déclarative de l'interface utilisateur.
* **Framework CSS : Bootstrap 5** pour une mise en page responsive, moderne et l'utilisation de composants comme les grilles et les cartes.
* **API : OpenWeatherMap** pour la récupération des données météorologiques mondiales via l'API standard JavaScript `fetch`.

## Fonctionnalités Implémentées avec Vue.js

### 1. Interrogation de l'API météo
* Utilisation de l'API native `fetch` (en remplacement de `$.ajax`) dans les méthodes de l'instance Vue pour récupérer les données en temps réel et les prévisions.
* Chargement automatique de la météo locale (Vannes) lors du montage de l'application grâce au hook `mounted()`.

### 2. Manipulation de la vue (Directives Vue.js)
* **Bindings et Événements** : Utilisation de `v-model` pour relier dynamiquement la barre de recherche et les formulaires aux données, et `@click` / `@keypress.enter` pour déclencher les recherches.
* **Conditions** : Utilisation de `v-if` / `v-else` pour gérer l'affichage conditionnel (ex: afficher le composant météo seulement si la ville est trouvée, gestion des messages d'erreur, affichage du message de succès dans la page contact).
* **Boucles** : Utilisation de `v-for` pour générer dynamiquement les cartes des prévisions sur 5 jours, ainsi que la liste déroulante des questions/réponses sur la page d'aide.

### 3. Afficher/Masquer les informations avancées
* Un bouton "Détails avancés" permet de basculer l'affichage des données techniques (humidité, vent, températures min/max, pression atmosphérique) de manière totalement réactive en modifiant simplement un booléen et en utilisant la directive `v-show`.

## Installation et Utilisation

1.  **Extraction** : Décompressez l'archive ZIP contenant le projet dans le répertoire de votre choix sur votre ordinateur.
2.  **Lancement** : Il n'y a pas besoin de serveur local (Node.js/NPM) car Vue.js est importé via CDN. Ouvrez simplement le fichier `index.html` dans n'importe quel navigateur web moderne (Chrome, Firefox, Edge, Safari).
3.  **Prérequis** : Une connexion internet est **indispensable** pour charger le framework Vue.js, la feuille de style Bootstrap, et pour interroger l'API distante OpenWeatherMap.
4.  **Utilisation** :
    * Sur la page d'accueil, saisissez le nom d'une ville dans la barre de recherche et appuyez sur "Valider" (ou la touche "Entrée").
    * Cliquez sur "Détails avancés" pour voir les informations supplémentaires.
    * Naviguez vers la page "Contact" ou "Aide" pour tester les autres fonctionnalités gérées par Vue.js.

## Structure du Projet
* `index.html` : Page principale de l'application avec l'instance Vue principale.
* `contact.html` : Page de contact gérée avec un formulaire réactif Vue.js.
* `aide.html` : Page de FAQ générée dynamiquement avec une boucle `v-for`.
* `script.js` : Contient toute la logique métier, la configuration de l'instance Vue.js principale et les appels API.
* `style.css` : Feuille de style personnalisée (couleurs, animations, etc.).
* `img/` : Dossier contenant les ressources graphiques (logo, fonds d'écran).

---
*TP : Introduction au framework Javascript Vue.js*