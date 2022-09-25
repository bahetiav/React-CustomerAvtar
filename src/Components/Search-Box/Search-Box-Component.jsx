import './search-box-style.css'

const SearchBox = ({className,placeholder,onChangeHandler}) =>{
   return(
        <input 
        className= {className}
                            type='search' 
                            placeholder={placeholder}
                            onChange={onChangeHandler}>
                        </input>
        );
}

export default SearchBox;