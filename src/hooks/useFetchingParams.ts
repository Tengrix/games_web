import {UseTypedSelector} from './useTypedSelector';
import {useDebounce} from './useDebounce';

export const useFetchingParams = () => {
    const {currentPage,pageSize} = UseTypedSelector(state => state.pagination)
    const {searchingTitle,sort} = UseTypedSelector(state => state.filter)
    const debounce = useDebounce(searchingTitle,2000)

    return  {
        page: currentPage,
        page_size: pageSize,
        title: debounce,
        ordering: sort
    }
}