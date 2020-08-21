// REDUX
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// REDUCERS
import sidebarReducer from './sidebarDuck';
import charsReducer, { getCharacterAction } from './charsDuck';
import menuReducer from './menuDuck';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Es la raiz que contiene y combina todos los reducers
let rootReducer = combineReducers({
  sidebarStatuses: sidebarReducer,
  characters: charsReducer,
  menuFilter: menuReducer,
});

// --- composeEnhacers ---
// Es una herramienta de desarrolladores en pocas palabras para debugging,
// en este caso lo utilizamos para el middleware.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Un --- middleware --- actúa como un puente entre un cliente y un servidor.
// En este caso específico, un --- thunk --- es una función que actúa como un wrapper
// ya que envuelve una expresión para retrasar su evaluación.
// Cuando usamos un Redux Store básico,
// lo único que puedes hacer son actualizaciones síncronas sencillas por medio de una acción.
// Pero si quieres trabajar con lógica asíncrona para interactuar con el Store,
// necesitarás algo más. Aquí es donde entra --- redux-thunk ---.
// --------------------------------------------------------------
// Si es una acción regular, redux-thunk no hace nada y la acción es procesada por el reducer del Store.
// Si la accion es una función, redux-thunk la invoca y usa los métodos dispatch y getState y cualquier argumento adicional.
export default function generateStore() {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  getCharacterAction()(store.dispatch, store.getState);
  return store;
}
