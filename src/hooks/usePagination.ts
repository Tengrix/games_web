import {useMemo} from 'react';

interface IUsePaginationType {
    currentPage:number;
    totalCount:number;
    pageSize:number;
    siblingCount:number;
}
export const DOTS = '...'

export function usePagination({currentPage,totalCount,pageSize,siblingCount = 1}:IUsePaginationType) {
    const range = (start:number, end:number) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5;
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );
        const shouldShowLeftDots = leftSiblingIndex > 1;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount ;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 1 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 1 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);
    return paginationRange;
}