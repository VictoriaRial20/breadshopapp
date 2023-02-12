// Configudar y crear nuestro store

import { categoryReducer, productReducer } from "./reducers";
import {combineReducers, createStore} from "redux";
//esta tachado porque hace 1 año salio una versión nueva de redux, pero aún no lo aplicamos 

//conjunto de reductores, la raiz de todos los reductores
const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
});

//El store se crea a partir de la combinación de todos mis reductores y es aqui:
export default createStore(rootReducer);