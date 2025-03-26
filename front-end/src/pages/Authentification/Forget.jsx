import React, { useState } from 'react'
import Auth from '../../services/Auth'
import { useNavigate } from 'react-router-dom'


function Forget() {
     const [email,setEmail]=useState({email:''})
        const navigate=useNavigate()
        const OnChangeHandel=(event)=>{
        setEmail({
            ...email,
            [event.target.name]:event.target.value
        })
        console.log("email",email)
       /*  console.log("notre donnés sont",Login) */
        }
        const HandelForget=async(event)=>{
         event.preventDefault()
         try {
            const res=await Auth.Forget(email)
            
                navigate("/Login")
                console.log("donauthentifivationne l",res.data.data)
                
    

            
         } catch (error) {
            console.log("erreur",error)
            
         }
        }
  return (
    <div>
        <section className="contact spad">
    <div className="container">
          <div className="contact__content">
            <div className="contact__form">
              <h5>Forget</h5>
              <form onSubmit={HandelForget}>
                <input type="email" placeholder="Email" name="email" onChange={OnChangeHandel}  />

                <button type="submit" className="site-btn">Forget</button>
              </form>
            </div>
          </div>
        </div>
  </section>

    </div>
  )
}

export default Forget