import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import UserRequest from "../requests/User";

import "./style.css";

export default function RepositoryDetails(props){

  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState();
  
  const { user, repo } = props.match.params
  const goBack = `/user/${user}/repos`;

  useEffect(() => {
    const getRepositories = async () => {
      try{
        setLoading(true)
        const res = await UserRequest.repositoryDetails({user: user, repo: repo});
  
        if (res.data)
          setData(res.data)
        
        setLoading(false)
      }
      catch (err){
        console.log("data error: ", err)
        setLoading(false)
      }
    }

    getRepositories();
  }, [user, repo]);

  const showRepositoryDetails = () => { 
    var repository = "";

    if(data){
      repository = (
        <div className="repository-box"><br/>

          <p className="repo-title">{`Repositório ${data.name}`}</p>
          <p>Descrição: {data.description}</p>
          <p>
            Estrelas: {data.stargazers_count}
          </p>

          <div className="space" />

          <div className="repository-footer">
            <div className="repository-links"><br/>
              <p>Contribuidores: 
                <a href={`https://github.com/${user}/${repo}/contributors`} 
                  target="_blank" rel="noreferrer"> Ver lista </a>
              </p>
              <p>Forks: {data.forks_count}</p>
              <p>Linguagem: {data.language}</p>
            </div>
          </div>
        </div>
      )
    }else{
      repository = <p>Ops... Não foi possível obter as informações.</p>
    }

    return repository
  }

  if (loading)
    return <Loader />

  return (
    <div className="container">
      
      <Navbar goBack={goBack} />
      
      <div className="space" />

      <div className="repositories">
        {showRepositoryDetails()}
      </div>
      
      <div className="space" />

      <Footer />
    </div>
  )
}
