export const pages = (totalCount:number,limit:number) => {
    return Math.ceil(totalCount/limit)
}
export const portionCount = (totalCount:number,limit:number,portionSize=10) => {
    const allPages = pages(totalCount,limit)
    return  Math.ceil(allPages / portionSize)
}