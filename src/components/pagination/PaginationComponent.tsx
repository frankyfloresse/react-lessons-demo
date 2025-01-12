import {useSearchParams} from "react-router-dom";
import {FC} from "react";

interface IProps {
    maxPage: number;
}

const PaginationComponent: FC<IProps> = ({ maxPage }) => {
    const [query, setQuery] = useSearchParams({ pg: '1' });

    const updatePage = (offset: number) => {
        const pg = query.get('pg');

        if (pg) {
            let currentPage = +pg;
            currentPage += offset;

            if (currentPage > 0 && currentPage <= maxPage) {
                setQuery({pg: currentPage.toString()})
            }
        }
    }

    return (
        <div>
            <button onClick={() => updatePage(-1)}>previous
            </button>

            <button onClick={() => updatePage(1)}>next
            </button>
        </div>
    );
};

export default PaginationComponent;