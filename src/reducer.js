

export const initialState ={
    basket :[
        {
        id:"1234567",
        title:"AmazonBasics 127cm (50 inch) Fire TV Edition 4K Ultra HD Smart LED TV AB50U20PS (Black)",
        price:11.96,
        rating:5,
        image:"https://m.media-amazon.com/images/I/81c5klKpUdL._AC_UY218_.jpg"

    }
],
    user:null,
}; 

 const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket:[...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic  for removing item from basket
            return {state};
            break;
            default:
            return state;
    }
}
 export default reducer;