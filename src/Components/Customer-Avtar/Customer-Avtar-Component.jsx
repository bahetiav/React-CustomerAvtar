import SearchBox from "../Search-Box/Search-Box-Component"
import CardList from "../Card-List/Card-List-Component";
import './Customer-Avtar-style.css'
import { useState,useEffect } from "react";


const CustomerAvtar= () =>{

    const [searchField,setSearchField]=useState('');
    const [CustomersList,setCustomerList]=useState([]);
    const [filterCustomerList,setFilterCustomerList]=useState(CustomersList);
    const [AppTitle, setAppTitle]=useState('Customer Avtar');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((customer)=>setCustomerList(customer));
    },[]);

    useEffect(()=>{
        const newfilteredCustomer=CustomersList.filter((cus)=>{
            return cus.name.toLocaleLowerCase().includes(searchField);
        });
        setFilterCustomerList(newfilteredCustomer);
    },[CustomersList,searchField]);
    

    const OnSearchChange= (event) =>{
        const searchString=event.target.value.toLocaleLowerCase();
        setSearchField(searchString);
    };

    const OnTitleChange= (event) =>{
        const searchString=event.target.value.toLocaleLowerCase();
        setAppTitle(searchString);
    };

    return(
             <div className="App" key='maincompo'>
                    <h1 className="customer-title"> {AppTitle} </h1>
                    <SearchBox className='search-box' placeholder='Search Customer' onChangeHandler={OnSearchChange}/>
                    <br></br>
                    <SearchBox className='search-box' placeholder='Title APP' onChangeHandler={OnTitleChange}/>
                    <CardList filterCustomerlist={filterCustomerList}/>
            </div>   
    );
};

export default CustomerAvtar;