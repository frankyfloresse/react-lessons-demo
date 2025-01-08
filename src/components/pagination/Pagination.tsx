import {FC} from "react";

interface IProps {
    page: number;
    maxPage: number;
    onPageChange: (page: number) => void
}

const Pagination: FC<IProps> = ({ page, maxPage, onPageChange }) => {
    return (
        <div>
            Current page: {page} / {maxPage}
            <button onClick={() => page > 1 && onPageChange(page - 1)}>prev</button>
            <button onClick={() => (page < maxPage) && onPageChange(page + 1)}>next</button>
        </div>
    );
};

export default Pagination;