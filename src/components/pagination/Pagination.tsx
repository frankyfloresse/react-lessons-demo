import {useSearchParams} from "react-router-dom";
import {FC} from "react";

interface IProps {
    maxPage: number;
}

const Pagination: FC<IProps> = ({ maxPage }) => {
    const [query, setQuery] = useSearchParams({ page: '1' });

     const updatePage = (offset: number) => {
         const page = query.get('page');

         if (page) {
             let currentPage = Number(page);
             currentPage += offset;

             if (currentPage > 0 && currentPage <= maxPage) {
                 setQuery({page: String(currentPage)});
             }
         }
     }

    return (
        <div>
            <button onClick={() => {updatePage(-1)}}>prev</button>
            <button onClick={() => {updatePage(1)}}>next</button>
        </div>
    );
};

export default Pagination;