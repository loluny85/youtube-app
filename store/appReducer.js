const appReducer = (state, action) => {
    switch (action.type) {
        case "SAVE_VIDEO_URL":
            return {
                ...state,
                videoUrl: action.payload
            }
        case "SAVE_TIMESTAMP":
            return {
                ...state,
                ...action.payload
            }

        case "DELETE_TIMESTAMP":
            return {
                ...state,
                navigateOutVideoPageTimeStamp: null,
                navigateOutVideoPagePlayerTimeStamp: null
            }

        case "PLAYER_STATE":
            return {
                ...state,
                playerState: action.payload
            }

        default:
            return state
    }
}

export default appReducer