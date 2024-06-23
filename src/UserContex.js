import React from "react";

export const UserContext = React.createContext();

export const initialState = {
    products: [
        { id: 101, title: "Phisology", price: 123, photo: "https://m.media-amazon.com/images/I/81z-Pj9NxjL._AC_UF1000,1000_QL80_.jpg" },
        { id: 102, title: "Islam", price: 132, photo: "https://m.media-amazon.com/images/I/81ntPHZ00CL._AC_UF1000,1000_QL80_.jpg" },
        { id: 103, title: "Mats", price: 929, photo: "https://images.penguinrandomhouse.com/cover/9780744080834" },
        { id: 104, title: "Literatur", price: 712, photo: "https://images.booksense.com/images/015/491/9781465491015.jpg" },
        { id: 105, title: "Exam", price: 124, photo: "https://images.pangobooks.com/images/c0bd88da-3f03-4816-ae7f-98b0f1d25dfa?quality=85&width=1200&crop=1%3A1" },
    ],
    basket: []
};

export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';


export const reducer = (state, action) => {
    switch(action.type) {
        case ADD_TO_BASKET:
            const item = state.products.find(product => product.id === action.payload.id);
            const inBasket = state.basket.find(item => item.id === action.payload.id);
            
            if (inBasket) {
                return state; 
            }

            return {
                ...state,
                basket: [...state.basket, {...item, count: 1}]
            };

        case REMOVE_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload.id)
            };

        case INCREASE_QUANTITY:
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload.id ? {...item, count: item.count + 1} : item
                )
            };

        case DECREASE_QUANTITY:
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.payload.id ? {...item, count: item.count > 1 ? item.count - 1 : 1} : item
                )
            };

        default:
            return state;
    }
};
