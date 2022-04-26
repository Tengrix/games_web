export const date = (str:string) => {
    const newDate = new Date(str)
    const slicedIndex = newDate.toDateString().indexOf(' ')
    return newDate.toDateString().slice(slicedIndex+1)
}