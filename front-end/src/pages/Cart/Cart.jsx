import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decrementFromCart, IncrementFromCart, removeFromCart } from '../Redux/Slice/cartSlice'

function Cart() {
  const Cart=useSelector((state)=>state.auth.cart)
  const priceToltal=useSelector((state)=>state.auth.cart.totalPrice)
  const dispatch=useDispatch()
  const clearAll=()=>{
    try {
      dispatch(clearCart())
      alert("votre Cart est vide")
      
      
    } catch (error) {
      console.log("erreur de suppression"+error)
      
    }
  }
  return (
    
   <div>
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5">
    <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 300}}>
      <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
      <div className="d-inline-flex">
        <p className="m-0"><a href>Home</a></p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Shopping Cart</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Cart Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      <div className="col-lg-8 table-responsive mb-5">
        {Cart.items.length>0 ? (<><table className="table table-bordered text-center mb-0">
          <thead className="bg-secondary text-dark">
            <tr>
              <th>Products</th>
              <th>Quantity</th>
              <th>prix unitaire</th>
              <th>prix totale</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            {Cart.items.map((item,index)=>(<tr key={index}>
              <td className="align-middle"><img src={`http://localhost:3000/${item.galleries[0].image}`} alt style={{width: 50}} /> {item?.ref}</td>
            
              <td className="align-middle">
                <div className="input-group quantity mx-auto" style={{width: 100}}>
                  <div className="input-group-btn">
                    <button onClick={()=>dispatch(decrementFromCart(item))} className="btn btn-sm btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.quantite} />
                  <div className="input-group-btn">
                    <button onClick={()=>dispatch(IncrementFromCart(item))} className="btn btn-sm btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">{item?.price}</td>
              <td className="align-middle">{item.price*item.quantite}</td>
              <td className="align-middle"><button onClick={()=>dispatch(removeFromCart(item))} className="btn btn-sm btn-primary"><i className="fa fa-times" /></button></td>
            </tr>))}
           
          </tbody>
        </table></>) : (<p>Votre pannier est vide</p>) }
        
      </div>
      <div className="col-lg-4">
        <form className="mb-5" action>
          <div className="input-group">
            <div className="input-group-append">
              <button onClick={clearAll} className="btn btn-primary">Clear</button>
            </div>
          </div>
        </form>
        <div className="card border-secondary mb-5">
          <div className="card-header bg-secondary border-0">
            <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3 pt-1">
              <h6 className="font-weight-medium">Subtotal</h6>
              <h6 className="font-weight-medium">$150</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">$10</h6>
            </div>
          </div>
          <div className="card-footer border-secondary bg-transparent">
            <div className="d-flex justify-content-between mt-2">
              <h5 className="font-weight-bold">Total</h5>
              <h5 className="font-weight-bold">{priceToltal}</h5>
            </div>
            <button className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Cart End */}
</div>


  )
}

export default Cart