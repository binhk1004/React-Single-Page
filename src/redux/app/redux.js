export const initailState = {
    openSideMenu: false,
};

export const Action = {
    Types: {
        UPDATE_STATE: '@@APP/UPDATE_STATE',
        HANDLE_SIDE_MENU: '@@APP/HANDLE_SIDE_MENU',
        YOUTUBE_SEARCH:'@@APP/YOUTUBE_SEARCH',
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        handlesidemenu: (status) => ({
            type: Action.Types.HANDLE_SIDE_MENU,
            status
        }),
        youtubeSearch: (params) => ({
            type:Action.Types.YOUTUBE_SEARCH,
            params
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
        case Action.Types.HANDLE_SIDE_MENU: {
            return {
                ...state,
                openSideMenu: action.status
            }
        }

    }
}




