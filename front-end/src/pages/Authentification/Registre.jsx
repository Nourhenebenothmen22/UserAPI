import React, { useState } from 'react'
import Auth from '../../services/Auth'
import { useNavigate } from 'react-router-dom'
import './Registre.css'

function Registre() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        phone: '',
        picture: null
      });
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    // Empêche la saisie de caractères non numériques
    if (e.target.name === 'phone') {
      const numbersOnly = e.target.value.replace(/[^0-9]/g, '')
      e.target.value = numbersOnly
    }
    else if(e.target.name=='picture'){
        setFormData({
            ...formData,picture:e.target.files[0]
        })

    }
    else{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          })
    }
    
   
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
const data=new FormData()
data.append('fullname',formData.fullname)
data.append('email',formData.email)
data.append('password',formData.password)
data.append('phone',formData.phone)
if(formData.picture){
    data.append('picture',formData.picture)
}

    try {
      
       console.log("les donne de notre utilisateur",data)
      const response = await Auth.registre(data)
      
      if (response.data.success) {
        setSuccess(true)
        setError('')
        navigate('/Login')
        
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de l\'inscription')
      console.log("erreur",err)
    }
  }

  return (
    <div className="registre-container">
      <form onSubmit={handleSubmit} className="registre-form">
        <h2>Créer un compte</h2>
        
        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">
          Inscription réussie! Vérifiez votre email pour le code de validation.
        </div>}

        <div className="form-group">
          <label>Nom complet</label>
          <input 
            type="text" 
            name="fullname"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Téléphone</label>
          <input 
            type="tel" 
            name="phone"
            onChange={handleChange}
           
            pattern="[0-9]{8}"
            title="8 chiffres requis"
            maxLength="8"
          />
        </div>
        <div className="form-group">
          <label>Picture</label>
          <input 
            type="file" 
            name="picture"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input 
            type="password" 
            name="password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirmer le mot de passe</label>
          <input 
            type="password" 
            name="confirmPassword"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          S'inscrire
        </button>

        <p className="login-link">
          Déjà inscrit? <a href="/login">Connectez-vous ici</a>
        </p>
      </form>
    </div>
  )
}

export default Registre