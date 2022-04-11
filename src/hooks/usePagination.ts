import {useMemo} from "react";
import {pages} from "../utils/pages";

export const usePagination = (totalCount:number,limit:number) => {
    let allPages = pages(totalCount,limit)
    return useMemo(()=>{
        const listOfPages:number[] = []
        for(let i = 1; i <= allPages; i++){
            listOfPages.push(i)
        }
        return listOfPages
    },[totalCount,limit])

}