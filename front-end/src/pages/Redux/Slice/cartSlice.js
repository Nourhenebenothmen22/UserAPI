import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
addToCart(state, action) {
  const { id, quantite } = action.payload;
  const existingItem = state.items.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantite += quantite; // :coche_blanche: Incrémentation correcte de la quantité
  } else {
    state.items.push({ ...action.payload, quantite: quantite }); // :coche_blanche: Ajout correct du nouvel item
  }
  state.totalPrice = state.items.reduce((sum, item) => sum + item.quantite * item.price, 0);
},
    removeFromCart(state, action) {
      /*   const index = state.items.findIndex(
          (item) => item.publicationId === action.payload.publicationId
        );
        if (index !== -1) {
          state.items.splice(index, 1);
              } */
      state.items = state.items.filter(
        (item) => { return item.id !== action.payload.id }
      );
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.quantite * item.price,
        0
      );
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  decrementFromCart(state, action) {
  const existingItem = state.items.find((item) => item.id === action.payload.id);
  if (existingItem) {
    if (existingItem.quantite > 1) {
      existingItem.quantite -= 1; // :coche_blanche: Décrémenter correctement
    } 
  }
  state.totalPrice = state.items.reduce((sum, item) => sum + item.quantite * item.price, 0);
},
IncrementFromCart(state, action) {
  const existingItem = state.items.find((item) => item.id === action.payload.id);
  if (existingItem) {
    if(existingItem.qte>existingItem.quantite){
      existingItem.quantite += 1; // :coche_blanche: Incrémenter correctement
    }
    
  }
  
  state.totalPrice = state.items.reduce((sum, item) => sum + item.quantite * item.price, 0);
},
  },
});
export const { addToCart, clearCart, removeFromCart, decrementFromCart, IncrementFromCart } = cartSlice.actions;
export default cartSlice.reducer;









