import './Card-style.css';

const Card = ({customer}) => {
        const {id, name, email}=customer;
        return (
            <div key={id} className="card-container">
                    <img 
                        alt={`customer ${name}`}
                        src={`https://robohash.org/${id}?set=set2&size=150x150`}
                        />
                    <h3>{name}</h3>
                    <p>{email}</p>
                 </div>
        );
    }

export default Card;