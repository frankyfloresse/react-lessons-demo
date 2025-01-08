import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'})
    return (
        <div>
            <button onClick={() => {
                const page = query.get('page');

                if (page) {
                    let currentPage = +page;
                    setQuery({page: (--currentPage).toString()})
                }
            }}>previous
            </button>

            <button onClick={() => {
                const page = query.get('page');

                if (page) {
                    let currentPage = +page;
                    setQuery({page: (++currentPage).toString()})
                }
            }}>next
            </button>
        </div>
    );
};

export default PaginationComponent;