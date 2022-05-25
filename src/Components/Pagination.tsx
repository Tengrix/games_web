import React, {useState} from 'react';
import {usePagination} from '../hooks/usePagination';
import {portionCount} from '../utils/pages';
import {setCurrentPage} from '../store/reducers/paginationReducer';
import {useDispatch} from 'react-redux';
import s from './Pagination.module.css'

interface PaginationType {
    totalCount: number | null;
    currentPage: number;
    pageSize: number;
    portionSize: number;
}

const Pagination = ({pageSize, totalCount, portionSize,currentPage}: PaginationType) => {
    const dispatch = useDispatch()
    const newStyle = (page:number) => {
        return page ? s.selectedBtn : s.paginationBtn
    }
    let portionAmount = portionCount(totalCount as number, pageSize, portionSize)
    let pages = usePagination(totalCount as number, pageSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    const onPageChangeHandler = (page: number) => {
        dispatch(setCurrentPage({page}))
    }
    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}> PREV</button>}
            {pages.filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
                .map((el, i) => {
                    return <span key={i}>
                        <button
                            className={currentPage===el?s.selectedBtn : s.paginationBtn}
                            onClick={() => onPageChangeHandler(el)}>
                           <b>{el}</b>
                        </button>
                    </span>

                })}

            {portionAmount > portionNumber &&
            <button
                className={s.nextBtn}
                onClick={() => setPortionNumber(portionNumber + 1)}>
                NEXT
            </button>
            }
        </div>
    );
};

export default Pagination;