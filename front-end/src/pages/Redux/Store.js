import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './Slice/AuthSlice'; // Assurez-vous du chemin
import cartSlice from './Slice/cartSlice'

// Configuration de Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth','cart']
};
const rootReducer=combineReducers({
  auth:authReducer,
  cart:cartSlice
})

// Création du reducer persisté
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuration du store
export const store = configureStore({
  reducer: {
    auth: persistedReducer, // ✅ Clé "reducer" avec structure correcte
  },
});

export const persistor = persistStore(store); // Export nommé