export const initState = { products: [] };

export const reducer = (state, action) => {
    const { data, type } = action;
    switch(type) {
        case 'GET_POSTS':
            return { products: data };
        default: return state;
    }
}
