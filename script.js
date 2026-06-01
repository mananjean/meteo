// Clé API OpenWeatherMap
const API_KEY = 'ee07e2bf337034f905cde0bdedae3db8';

// Création de l'application Vue
const app = Vue.createApp({
    // L'état de l'application (les données réactives)
    data() {
        return {
            inputVille: '',       // Ce que l'utilisateur tape dans la barre de recherche
            weather: null,        // Les données de la météo recherchée
            localWeather: null,   // Les données de la météo par défaut (Vannes)
            forecast: [],         // Le tableau des prévisions sur 5 jours
            errorMsg: '',         // Message d'erreur en cas de ville introuvable
            showAdvanced: false   // Booléen pour afficher/masquer les détails
        };
    },
    
    // Les méthodes (fonctions) de l'application
    methods: {
        // Interrogation de la météo actuelle pour la ville recherchée
        async getMeteo() {
            if (!this.inputVille) return; // Ne fait rien si le champ est vide
            
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.inputVille}&appid=${API_KEY}&units=metric&lang=fr`);
                
                // Si la ville n'est pas trouvée
                if (!response.ok) {
                    throw new Error("Ville introuvable");
                }
                
                const data = await response.json();
                this.weather = data;    // Met à jour les données météo
                this.errorMsg = "";     // Réinitialise le message d'erreur
                
                // Appel automatique des prévisions pour cette même ville
                this.getForecast(this.inputVille);
                
            } catch (error) {
                this.errorMsg = "Erreur : Ville non trouvée ou problème de connexion.";
                this.weather = null;
                this.forecast = [];
            }
        },
        
        // Interrogation des prévisions sur 5 jours
        async getForecast(city) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=fr`);
                const data = await response.json();
                
                // On filtre pour en garder 1 par jour (index % 8 === 0)
                this.forecast = data.list.filter((item, index) => index % 8 === 0);
            } catch (error) {
                console.error("Erreur lors de la récupération des prévisions", error);
            }
        },

        // Chargement initial de la météo locale (Vannes)
        async loadLocalWeather() {
            try {
                const localVille = 'Vannes';
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localVille}&appid=${API_KEY}&units=metric&lang=fr`);
                this.localWeather = await response.json();
            } catch (error) {
                console.error("Impossible de charger la météo locale.");
            }
        },

        // Basculer l'affichage des informations avancées (vrai/faux)
        toggleDetails() {
            this.showAdvanced = !this.showAdvanced;
        },

        // --- Méthodes utilitaires de formatage ---
        
        // Conversion de la vitesse du vent (m/s en km/h)
        getWindSpeed(speed) {
            return Math.round(speed * 3.6); 
        },
        
        // Formatage du timestamp UNIX en date lisible (ex: "mer. 18")
        formatDate(timestamp) {
            const dateObj = new Date(timestamp * 1000);
            return dateObj.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric' });
        }
    },
    
    // Le hook "mounted" s'exécute dès que l'application est prête 
    // (remplace le document.ready de jQuery)
    mounted() {
        this.loadLocalWeather(); // Charge Vannes au démarrage
    }
});

// Lancement de l'application en la greffant sur la div avec l'id "app"
app.mount('#app');