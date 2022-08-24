import React, {useReducer, useContext, createContext} from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) =>{
    switch(action.type){
        case "ADD":
            //state.push()
            if (state.length > 0){
                const newArr1 = [...state]
                for (let i = 0; i < newArr1.length; i++) {
                    if (!newArr1[i].id.includes(action.item.id)){
                        action.item.countCart=1
                        return [...newArr1, action.item]
                    }
                    else{
                        newArr1[i].countCart = newArr1[i].countCart + 1
                        return [...newArr1]
                    }
                }
                newArr1.forEach(eachState => {
                    console.warn(eachState.name)
                    
                })
            }
            else{
                action.item.countCart=1
                return [...state, action.item]
            }
            
        case "DELETE":
            const newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr
        case "RENEW_CART":
            return []
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
