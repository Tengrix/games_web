import axios from "axios";
import {SortingType} from '../types/types';

export const instance = axios.create({
    baseURL:'https://api.rawg.io/api/'
})
export const getALlGames = (page_size:number,page:number,title:string, ordering:SortingType) => {
    return instance.get(
        `games?ordering=${ordering}&page_size=${page_size}&page=${page}&search=${title}&key=34f4bc399f394d87a8595769b1ef97ee`
    )
}
export const getAllPlatforms = () => {
    return instance.get(`platforms?key=34f4bc399f394d87a8595769b1ef97ee`)
}
export const getGamesByPlatform = (platformId:number) => {
    return instance.get(`games?key=34f4bc399f394d87a8595769b1ef97ee&platforms=${platformId}`)
}
export const getSearchedGames = (title:string)=>{
    return instance.get(`games?key=34f4bc399f394d87a8595769b1ef97ee&search=${title}`)
}
export const getSingleGame = (id:number) => {
    return instance.get(`games/${id}?key=34f4bc399f394d87a8595769b1ef97ee`)
}