import React, { useState } from "react";
import Navbar from "../components/Navbar";

import banner from "../assets/img/git-banner.png";
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
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Procurar um usuário..."
              minLength="3" 
              maxLength="30"
              required
              onChange={(e) => handleFilter(e)}
            /><br/>
          </div>
          
          <span className="suggestions">Sugestões: guimachadooo, rstacruz, leeopaleari</span>

          <div className="space" />

          <button className="btn-search" type="submit">Pesquisar</button>
        </form>
      </div>
    </div>
  )
}
