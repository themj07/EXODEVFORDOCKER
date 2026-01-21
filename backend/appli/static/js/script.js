// Identifiants admin
const adminCredentials = {
    email: 'admin@ecole.fr',
    password: 'admin123'
};

// Gestion de la page de login (login.html)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMsg = document.getElementById('loginError');

        if (email === adminCredentials.email && password === adminCredentials.password) {
            errorMsg.classList.remove('active');
            // Redirection vers le tableau de bord
            window.location.href = 'dashboard.html';
        } else {
            errorMsg.classList.add('active');
        }
    });
}

// Gestion du tableau de bord (dashboard.html)
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        // Retour à la page de connexion
        window.location.href = 'login.html';
    });
}

// Gestion des onglets
const tabs = document.querySelectorAll('.tab');
if (tabs.length > 0) {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Retirer la classe active de tous les onglets et sections
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            
            // Ajouter la classe active à l'onglet cliqué et sa section
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
}