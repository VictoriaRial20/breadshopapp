import { CATEGORIES } from '../../constants/data';
import { categoryTypes } from '../types';

const { SELECT_CATEGORY } = categoryTypes;

//indicar el estado inicial 
const initialState = {
    categories: CATEGORIES,
    selected: null,
};

//declarar el reductor , recibe un estado (inicial) y la accion que debería interactuar con este reductor en el store
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            const indexCategory = state.categories.findIndex(
                (category) => category.id === action.categoryId
            );
            if (indexCategory === -1) return state;

            return {
                ...state,
                selected: state.categories[indexCategory],
            };
        default:
            return state;
    } //que retorne el estado directamente
};

export default categoryReducer;
