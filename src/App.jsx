import React, { Component } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import "./style.css";
import Footer from "./components/Footer";
import About from "./components/About";
export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      prods:[],
      search: ""
    };
}
componentDidMount(){
    try{
        let api=fetch("https://fakestoreapi.com/products");
        api.then(x=>x.json()).then(x1=>this.setState({prods:x1}));        
    }
    catch(err){
        console.log(err);
    }
}
change = (e) => {
  this.setState({ search: e.target.value });
};
  render(){
    // console.log(this.state.prods);
    let searchProds = this.state.prods.filter((product) =>
      product.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return(
      <>
      <Header/>
      <div id="search-main">
        <div id="input-div">
          {/* {searchProds = this.state.prods.filter((product) =>
        product.title.toLowerCase().includes(this.state.search.toLowerCase())
      )} */}
            <input
              type="text"
              value={this.state.search}
              onChange={this.change}
              placeholder="Search products..."
            /><i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <About/>
        <div id="prodDiv">
          {searchProds.map((product,index)=><Products
            key={index}
            prodIndex={product.id}
            prodImage={product.image}
            prodTitle={product.title}
            prodPrice={`${product.price}`}
            prodDescription={product.description}
            prodCategory={product.category}
            prodRating={product.rating.rate}
            prodCount={product.rating.count}/>)}
        </div>
      </div>
      <Footer/>
      </>
    )
  }
}