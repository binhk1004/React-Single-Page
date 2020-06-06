export const initailState = {
    list:[]
};

export const Action = {
    Types: {
        UPDATE_STATE: '@@TODO/UPDATE_STATE',
        GET_TODOS:'@@TODO/GET_TODOS'

    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        getTodos: () => ({
            type:Action.Types.GET_TODOS
        })

    }
};

export const reducer = (state = initailState, action) => {
    switch (action.type) {
        default:
            return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
    }

}





