import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [data, setData] = useState({ etudiants: [], profs: [], total_etudiants: 0, total_profs: 0, total: 0 });
    const [activeTab, setActiveTab] = useState('students'); // 'students' ou 'teachers'
    const navigate = useNavigate();
    const username = localStorage.getItem('username') || 'Administrateur';

    useEffect(() => {
        if (!localStorage.getItem('isAuthenticated')) {
            navigate('/');
            return;
        }

        axios.get('http://localhost:8000/api/dashboard/')
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className="container">
            <div className="dashboard">
                {/* En-tête */}
                <div className="header">
                    <div>
                        <h2>Tableau de bord</h2>
                        <p className="subtitle">Bienvenue, <span id="adminName">{username}</span></p>
                    </div>
                    <button onClick={handleLogout} className="btn btn-secondary">Déconnexion</button>
                </div>

                {/* Cartes statistiques */}
                <div className="stats">
                    <div className="stat-card">
                        <h3>{data.total_etudiants}</h3>
                        <p>Étudiants</p>
                    </div>
                    <div className="stat-card">
                        <h3>{data.total_profs}</h3>
                        <p>Professeurs</p>
                    </div>
                    <div className="stat-card">
                        <h3>{data.total}</h3>
                        <p>Total</p>
                    </div>
                </div>

                {/* Onglets de navigation */}
                <div className="tabs">
                    <button 
                        className={`tab ${activeTab === 'students' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('students')}
                    >
                        Étudiants
                    </button>
                    <button 
                        className={`tab ${activeTab === 'teachers' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('teachers')}
                    >
                        Professeurs
                    </button>
                </div>

                {/* Contenu : Liste des Étudiants */}
                {activeTab === 'students' && (
                    <div className="content-section active">
                        <div className="user-grid">
                            {data.etudiants.map(etudiant => (
                                <div className="user-card" key={etudiant.id}>
                                    <h3>{etudiant.prenom} {etudiant.nom}</h3>
                                    <p>📧 {etudiant.email}</p>
                                    <p>📚 {etudiant.filiere}</p>
                                    <p>📅 {etudiant.niveau_etude}</p>
                                    <span className="badge">Étudiant</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Contenu : Liste des Professeurs */}
                {activeTab === 'teachers' && (
                    <div className="content-section active">
                        <div className="user-grid">
                            {data.profs.map(prof => (
                                <div className="user-card" key={prof.id}>
                                    <h3>{prof.prenom} {prof.nom}</h3>
                                    <p>📧 {prof.email}</p>
                                    <p>📖 {prof.matiere_enseigne}</p>
                                    <p>⏱️ {prof.annee_exp} ans</p>
                                    <span className="badge">Professeur</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;