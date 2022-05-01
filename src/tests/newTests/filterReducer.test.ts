import {filterReducer, setSearchingTitle, setSortedGames} from '../../store/reducers/filterReducer'
describe('should return filtered games', ()=>{
    it('filtered games by title', ()=>{
        const reducer = filterReducer(undefined,setSearchingTitle({title:'damir'} ))
        expect(reducer).toEqual({
            searchingTitle: 'damir',
            sort: '-rating'
        })
    })
    it('sorted games by sort',()=>{
        const reducer = filterReducer(undefined, setSortedGames({value:'released'}))
        expect(reducer).toEqual({
            sort:'released',
            searchingTitle:''
        })
    })
})