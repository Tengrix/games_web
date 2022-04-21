const months = ['Jan','Feb','March','April','May',
    'June','July','Aug','Sep','Oct','Nov','Dec']
export const date = (str:string) => {
    const newDate = str.split('-').reverse().join(', ')
    let month = Number(newDate.slice(0,newDate.search(',')))
    for(let i = 0; i <= months.length; i++){
        if(i===month){
            return `${months[i]}${newDate.slice(newDate.search(' '))}`
        }
    }
}