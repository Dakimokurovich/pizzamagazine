const initialState = {
    menu: [],
    loading: true,
    total: 0,
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUSTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const itemIdx = state.items.findIndex(item => item.id === id);
            const itemRepeat = state.items[itemIdx];
            let newItem;

            if (itemRepeat) {
                newItem = {
                    ...itemRepeat,
                    sum: itemRepeat.sum + 1
                };
            } else {
                newItem = {
                    title: item.title,
                    price: item.price,
                    url: item.url,
                    id: item.id,
                    sum: 1
                };
            }

            if (itemIdx < 0) {
                return {
                    ...state,
                    items: [
                       ...state.items,
                       newItem
                    ],
                    total: state.total + newItem.price,               
                };
            } else {
                return {
                    ...state,
                    items: [
                       ...state.items.slice(0, itemIdx),
                       newItem,
                       ...state.items.slice(itemIdx + 1)
                    ],
                    total: state.total + newItem.price,
                };
            };
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const itemDelete = state.items[itemIndex];
            let itemDeleteNew;

            if (itemDelete.sum > 1) {
                itemDeleteNew = {
                    ...itemDelete,
                    sum: itemDelete.sum - 1
                };
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndex),
                        itemDeleteNew,
                        ...state.items.slice(itemIndex + 1),
                    ],
                    total: state.total - itemDelete.price
                };
            }

                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndex),
                        ...state.items.slice(itemIndex + 1)
                    ],
                    total: state.total - itemDelete.price
                };
        default:
            return state;
    }
};

export default reducer;