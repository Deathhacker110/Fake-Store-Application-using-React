import React, { Component } from "react";
export default class Products extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }
    incre=()=>this.setState({count:this.state.count+1});
    decre=()=>this.setState({count:this.state.count>0?this.state.count-1:0});
    render(){
        return(
            <>
            <div className="prodContainer">
                <a href="" className="prodLink"><img src={this.props.prodImage} alt="" /></a>
                <h2 className="prodTitle">{this.props.prodTitle}</h2>
                <h2 className="prodPrice">{this.props.prodPrice}</h2>
                <p className="prodDesc">{this.props.prodDescription}</p>
                <h2 className="prodCat">{this.props.prodCategory}</h2>
                <div className="ratingContainer">
                    <h4 className="prodRate">{this.props.prodRating}</h4>
                    <h4>|</h4>
                    <h4 className="prodCount">{this.props.prodCount}</h4>
                </div> 
                <div className="cart">
                    <button onClick={this.incre}>+</button>
                    <h1>{this.state.count}</h1>
                    <button onClick={this.decre}>-</button>
                </div>
            </div>
            </>
        )
    }
}
