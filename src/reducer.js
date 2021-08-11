export const initialState={
basket: [{
            id:"1",
            title:"OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)",
            price:29999,
            rating:4,
            image:"https://m.media-amazon.com/images/I/71KVeQql77S._SX679_.jpg"
},
{
            id:"1",
            title:"OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)",
            price:29999,
            rating:4,
            image:"https://m.media-amazon.com/images/I/71KVeQql77S._SX679_.jpg"
},
],
user: null,
};

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
            
        case "REMOVE_FROM_BASKET":
            let newBasket=[...state.basket];
            const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id);
            if (index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(
                    'Cant remove product (id: ${action.id}) as its not in basket!' 
                );
            }

            return{...state, basket: newBasket,};
            default:
                return state;    
    }
};
export default reducer;