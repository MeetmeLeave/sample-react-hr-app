const visibilityFilters = (state = { name: '', city: '' }, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTERS':
            return { name: action.name || '', city: action.city || '' };
        default:
            return state;
    }
};

export default visibilityFilters;