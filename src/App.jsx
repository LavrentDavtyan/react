import { useReducer } from 'react';
import './App.css';
import { ProductList } from './components/ProductList'
import { Basket } from './components/Bascet'
import { UserContext, initialState, reducer } from './UserContex';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="row">
            <UserContext.Provider value={{ state, dispatch }}>
                <ProductList items={state.products} />
                <Basket items={state.basket} />
            </UserContext.Provider>
        </div>
    );
}

export default App;
