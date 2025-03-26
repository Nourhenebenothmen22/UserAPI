import React, { useState } from 'react';
import Auth from '../../services/Auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../pages/Redux/Slice/AuthSlice';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' }); // Initialisation correcte
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await Auth.Login(formData);
            const user = res.data.data;
            const type = user.itemtype;
            
            if (type === "customer") {
                const userData = {
                    user: {
                        id: user._id,
                        email: user.email,
                        fullname: user.fullname,
                        picture: user.picture
                    },
                    Tokens: {
                        accessToken: res.data.accessToken,
                        refreshToken: res.data.refreshToken
                    }
                };
                
                dispatch(login(userData)); // Dispatch correct vers Redux
                navigate("/");
            } else {
                alert("Accès refusé : compte non client");
            }
        } catch (error) {
            console.error("Échec de la connexion :", error);
            alert("Identifiants incorrects");
        }
    };

    return (
        <div>
            <section className="contact spad">
                <div className="container">
                    <div className="contact__content">
                        <div className="contact__form">
                            <h5>Connexion</h5>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Mot de passe"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <Link to="/forget">Mot de passe oublié ?</Link>
                                <button type="submit" className="site-btn">
                                    Se connecter
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;