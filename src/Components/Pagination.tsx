import React, {useState} from 'react';
import {usePagination} from "../hooks/usePagination";
import {portionCount} from "../utils/pages";

interface PaginationType {
    totalCount: number|null;
    currentPage: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    portionSize:number;
}

const Pagination = ({onPageChange,pageSize,totalCount,portionSize}:PaginationType) => {
    let portionAmount = portionCount(totalCount as number,pageSize,portionSize)
    let pages = usePagination(totalCount as number,pageSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber-1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={()=> setPortionNumber(portionNumber-1)}> PREV</button>}
            {pages.filter(el=>el >= leftPortionPageNumber && el <= rightPortionPageNumber)
                .map((el,i) => {
                    return <span  key={i} >
                        <button
                                onClick={() =>onPageChange(el)}>{el}</button>
                    </span>

                })}

            {portionAmount > portionNumber &&
            <button onClick={()=> setPortionNumber(portionNumber+1)}>NEXT</button>}
        </div>
    );
};

export default Pagination;