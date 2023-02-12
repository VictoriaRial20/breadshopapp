import { PRODUCTS } from '../../constants/data';
import { productsTypes } from '../types';

const {FILTER_PRODUCTS, SELECT_PRODUCT} = productsTypes; 

//indicar el estado inicial 
const initialState = {
    products: PRODUCTS,
    filteredProducts:[],
    selected: null,
};

//declarar el reductor , recibe un estado (inicial) y la accion que debería interactuar con este reductor en el store
const productReducer = (state = initialState, action) => {
     //que retorne el estado directamente
     switch(action.type) {
        case SELECT_PRODUCT: {
            return {
                ...state,
                selected: state.products.find(
                    (product) => product.id === action.productId),
            };

        }
        case FILTER_PRODUCTS:{
            return{
                ...state,
                filteredProducts: state.products.filter(
                    (product) => product.categoryId === action.categoryId),
            };
        };
        default:
            return state;
     }
}; 

export default productReducer;