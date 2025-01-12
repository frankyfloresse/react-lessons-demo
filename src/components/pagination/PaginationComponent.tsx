import {useSearchParams} from "react-router-dom";
import {FC} from "react";

interface IProps {
    maxPage: number;
}

const PaginationComponent: FC<IProps> = ({ maxPage }) => {
    const [query, setQuery] = useSearchParams({ pg: '1' });

    return (
        <div>
            <button onClick={() => {
                const pg = query.get('pg');
                if (pg) {
                    let currentPage = +pg;
                    currentPage--;

                    if (currentPage > 0) {
                        setQuery({pg: currentPage.toString()})
                    }
                }
            }}>previous
            </button>

            <button onClick={() => {
                const pg = query.get('pg');
                if (pg) {
                    let currentPage = +pg;
                    currentPage++;

                    if (currentPage <= maxPage) {
                        setQuery({pg: currentPage.toString()})
                    }
                }
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;