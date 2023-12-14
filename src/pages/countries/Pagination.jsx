const MAX_ITEMS = 3;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

// eslint-disable-next-line react/prop-types
const Pagination = ({limit, total, offset, setOffset}) => {
    const current = offset ? offset / limit + 1 : 1;
    const pages = Math.ceil(total / limit);
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(
        Math.max(current - MAX_LEFT, 1),
        maxFirst
    );

    function onPageChange(page) {
        setOffset((page - 1) * limit);
    }

    return (
        <ul className="pagination">
            <li>
                <button
                    onClick={() => onPageChange(current - 1)}
                    disabled={current === 1}
                >
                    &lt;
                </button>
            </li>
            {Array.from({length: Math.min(MAX_ITEMS, pages)})
                .map((_, index) => index + first)
                .map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={page === current ? 'active' : ''}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            <li>
                <button
                    onClick={() => onPageChange(current + 1)}
                    disabled={current === pages}
                >
                    &gt;
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
