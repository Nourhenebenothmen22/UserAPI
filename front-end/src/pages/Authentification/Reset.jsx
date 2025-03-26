import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Auth from"../../services/Auth"

function Reset() {
    const {token}=useParams()
    const navigate = useNavigate()
     const [Password , setPassword]= useState({password:''})
    const [ConfirmPass , setConfirmPass]= useState()
    const  Reset = async (event)=>{
        event.preventDefault();
          try {
            if(Password !== ConfirmPass ){
              alert('Password and Confirm Password should be same')
            }
        const response = await Auth.ResetPassword(Password, token);
        console.log("mot de passe changé avec succés :", response.data);
        
        navigate('/login')
      } catch (error) {
        console.error("Erreur lors de changement de mot de passe :", error);
        alert("Erreur lors de changement de mot de passe .");
      }
      }
    
    
  return (
    <div>
          <section className="contact spad">
    <div className="container">
          <div className="contact__content">
            <div className="contact__form">
              <h5>Reset</h5>
              <form onSubmit={Reset}>
                <input type="password" placeholder="password" name="password" onChange={(e)=>setPassword(e.target.value)}   />
                <input type="password" placeholder="Confirmpassword" name="Confirmpassword"onChange={(e)=>{setConfirmPass(e.target.value)}}  />

                <button type="submit" className="site-btn">Reset</button>
              </form>
            </div>
          </div>
        </div>
  </section>

    </div>
  )
}

export default Reset