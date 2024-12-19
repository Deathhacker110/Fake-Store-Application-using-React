import React, { Component } from "react";
export default class Header extends Component{
    render(){
        return(
            <>
            <div id="header">
                <img src="shopping.png" alt="" />
                <div id="listDiv">
                    <ul id="list">
                        <li><a href="">Home</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Categories</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
}