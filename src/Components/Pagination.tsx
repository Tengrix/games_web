import React from 'react';
import s from './Pagination.module.scss'
import {DOTS, usePagination} from '../hooks/usePagination';
import {setCurrentPage} from '../store/reducers/paginationReducer';
import {useDispatch} from 'react-redux';
import arrowLeft from '../assets/icons8-arrow-pointing-left.gif'
import arrowRight from '../assets/icons8-arrow.gif'

interface PaginationType {
    totalCount: number
    currentPage: number;
    pageSize: number;
    portionSize: number;
    siblingCount: number;
}

const Pagination = ({pageSize, totalCount, siblingCount, currentPage}: PaginationType) => {
    const dispatch = useDispatch()
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });
    if (currentPage === 0 || (paginationRange?.length as number) < 2) {
        return null;
    }
    const lastEl = paginationRange && paginationRange[paginationRange.length - 1]
    const onNext = () => {
        dispatch(setCurrentPage({page: currentPage + 1}))
    };

    const onPrevious = () => {
        dispatch(setCurrentPage({page: currentPage - 1}))
    };
    const onPageChangeHandler = (page: number) => {
        dispatch(setCurrentPage({page}))
    }
    return (
        <ul
            className={s.wrapper}>
            <li className={s.paginationItem}>
                <button
                    type="button"
                    className={s.arrowButton}
                    onClick={onPrevious}
                    disabled={currentPage === 1}
                >
                    <img src={arrowLeft} style={{width: 'inherit', height: 'inherit'}} alt=""/>
                </button>
            </li>
            {paginationRange && paginationRange.map((pageNumber, idx) => {
                if (pageNumber === DOTS) {
                    return (
                        <li key={idx} className={s.dots}>
                            &#8230;
                        </li>
                    );
                }

                return (
                    <li
                        key={idx}
                        className={s.paginationItem}
                        aria-current={currentPage === pageNumber ? 'page' : 'false'} // change this line to highlight a current page.
                    >
                        <button
                            type="button"
                            onClick={() => onPageChangeHandler(pageNumber as number)}
                        >
                            {pageNumber}
                        </button>
                    </li>
                );
            })}
            <li className={s.paginationItem}>
                <button
                    type="button"
                    className={s.arrowButton}
                    onClick={onNext}
                    disabled={currentPage === lastEl} // change this line to disable a button.
                >
                    <img src={arrowRight} style={{width: 'inherit', height: 'inherit'}} alt=""/>
                </button>
            </li>
            {/*<select*/}
            {/*    className="paginationSelector"*/}
            {/*    // Do not remove the aria-label below, it is used for Hatchways automation.*/}
            {/*    aria-label="Select page size"*/}
            {/*    value={pageSize}*/}
            {/*    onChange={(e) => {*/}
            {/*        onPageSizeOptionChange(e.target.value);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {pageSizeOptions.map((size) => (*/}
            {/*        <option key={size} defaultValue={pageSize === size} value={size}>*/}
            {/*            {size} per page*/}
            {/*        </option>*/}
            {/*    ))}*/}
            {/*</select>*/}
        </ul>
    );
};

export default Pagination;