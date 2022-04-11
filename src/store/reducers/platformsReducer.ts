import {PlatformTypes} from "../../types/platfomsType/platformTypes";
import {InferActionsType} from "./index";
import {ThunkDispatch} from "redux-thunk";
import {createDeflateRaw} from "zlib";
import {getAllPlatforms} from "../../api/api";

const platformsInitialState:PlatformTypes = {
    count:null,
    next:null,
    previous:null,
    results: []
}
export const PlatformsReducer = (state=platformsInitialState,action:PlatformsReducerActionType) => {
    switch (action.type) {
        case "SET_PLATFORMS":
            return action.platforms
        default:
            return state
    }
}
type PlatformsReducerActionType = InferActionsType<typeof platformsReducerActions>
export const platformsReducerActions = {
    setGamesPlatforms:(platforms:PlatformTypes)=>{
        return{
            type:'SET_PLATFORMS',
            platforms
        } as const
    }
}

export const fetchPlatforms = () => async (dispatch:ThunkDispatch<any, any, any>)=>{
    try {
        const data = await getAllPlatforms()
        dispatch(platformsReducerActions.setGamesPlatforms(data.data))
    }catch (e) {
        
    }
}