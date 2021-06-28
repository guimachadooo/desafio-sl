import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import banner from "../assets/img/sl.png";
import "./style.css";

export default function Search(props){

  const [filter, setFilter] = useState("");
  const { push } = props.history;

  const handleFilter = (e) => {
    var param = e.target.value;

    if (!param.trim()){
      return false
    }else{
      setFilter(param)
    }
  }

  const doSearch = async (e) => {
    e.preventDefault();
    
    push(`result/${filter}`)
  }

  return (
    <div className="container">
      
      <Navbar />

      <div className="space" />

      <div className="search-box">
        <img src={banner} className="banner" alt="SearchLog" />

        <form onSubmit={doSearch}>
          <input 
            type="text" 
            placeholder="Procurar um usuário..."
            minLength="3" 
            maxLength="30"
            required
            onChange={(e) => handleFilter(e)}
          /><br/>
          <span className="suggestions">Sugestões: guimachadooo, rstacruz, leeopaleari</span>

          <div className="space" />

          <button className="btn-search" type="submit">Pesquisa SL</button>

          <button 
              className="btn-token" 
              type="button" 
              onClick={() => window.location.href = "https://sexlog.com"}>
              Ganhar Tokens
          </button>
        </form>
      </div>

      <div className="space" />

      <Footer />

    </div>
  )
}
