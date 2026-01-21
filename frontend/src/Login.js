import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                email: email,
                password: password
            });

            if (response.data.status === 'success') {
                localStorage.setItem('isAuthenticated', 'true');
                // On peut aussi stocker le nom de l'user si l'API le renvoie
                localStorage.setItem('username', response.data.username); 
                navigate('/dashboard');
            }
        } catch (err) {
            setError("Email ou mot de passe incorrect");
        }
    };

    return (
        <div className="container">
            <div className="login-card">
                <h1>Connexion Admin</h1>
                <p className="subtitle">Accédez au tableau de bord</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="admin@ecole.fr" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="••••••••" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>

                    {error && <p className="error" style={{color: 'red', marginBottom: '15px'}}>{error}</p>}

                    <button type="submit" className="btn">Se connecter</button>
                </form>
            </div>
        </div>
    );
}

export default Login;