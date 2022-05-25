import {UseTypedSelector} from '../hooks/useTypedSelector';

export const fetchingParams = () => {
    const {currentPage,pageSize} = UseTypedSelector(state => state.pagination)
    const {searchingTitle,sort} = UseTypedSelector(state => state.filter)
    return  {
        page: currentPage,
        page_size: pageSize,
        title: searchingTitle,
        ordering: sort
    }
}