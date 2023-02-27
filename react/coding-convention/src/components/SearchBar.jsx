const SearchBar = () => {
    return (
        <form action="">
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox"/>
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}

export default SearchBar