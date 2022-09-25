import Card from "../Card/Card-Component";
import './Card-List-style.css';

const CardList = ({filterCustomerlist}) => {

        return (
        <div className="card-list">
            {filterCustomerlist.map(
                (customer)=>
                 (
                    <Card customer={customer}/>
                 )
            )}
        
        </div>
        )
    }

export default CardList;