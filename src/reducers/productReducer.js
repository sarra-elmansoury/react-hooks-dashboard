export const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    case 'ADD_PRODUCT':
      return [action.payload, ...state];
    case 'DELETE_PRODUCT':
      return state.filter(p => p.id !== action.payload);
    case 'TOGGLE_STOCK':
      return state.map(p => 
        p.id === action.payload ? { ...p, inStock: !p.inStock } : p
      );
    default:
      return state;
  }
};