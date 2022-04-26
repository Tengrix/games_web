import axios from "axios";

export const instance = axios.create({
    baseURL:'https://api.rawg.io/api/'
})

export const getGamesByPlatform = (platformId:number) => {
    return instance.get(`games?key=34f4bc399f394d87a8595769b1ef97ee&platforms=${platformId}`)
}
export const getSearchedGames = (title:string)=>{
    return instance.get(`games?key=34f4bc399f394d87a8595769b1ef97ee&search=${title}`)
}
