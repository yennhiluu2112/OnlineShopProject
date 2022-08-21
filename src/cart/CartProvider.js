import React, {useReducer, useContext, createContext} from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) =>{
    switch(action.type){
        case "ADD":
            //state.push()
            return [...state, action.item]
        case "DELETE":
            const newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr
        default:
            throw new Error('Unknown action type: ' + action.type)
    }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}
export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)
