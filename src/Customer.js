import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Customer.css'
import CardList from "./Components/Card-List/Card-List-Component";
import SearchBox from "./Components/Search-Box/Search-Box-Component";

class Customer extends Component
{
constructor(){
    super();

    this.state={
        Customers:[],
        searchField : '',
    }
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((customer)=>this.setState(()=>{
        return {Customers:customer};
    },()=>{console.log(this.state)}));
}

OnSearchChange=(event)=>{
    const searchField= event.target.value.toLocaleLowerCase();
        this.setState(()=>{
        return {searchField };
    })
};

render(){

    const {Customers, searchField}=this.state;
    const {OnSearchChange}=this;

    var filterCustomerlist=Customers.filter((cus)=>{
        return cus.name.toLocaleLowerCase().includes(searchField);
    });

        return (
            
            <div className="App">
                <h1 className="customer-title"> Customer Avtar </h1>
                <SearchBox className='search-box' placeholder='Search Customer' onChangeHandler={OnSearchChange}/>
                <CardList filterCustomerlist={filterCustomerlist}/>

            </div>
        );
    }

}

export default Customer;