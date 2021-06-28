import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import UserRequest from "../requests/User";

import "./style.css";

export default function SearchResult(props){
  const [error, setError] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState();

  const { user } = props.match.params;
  const goBack = "/";

  useEffect(() => {
    const getData = async () => {
      try{
        setLoading(true)
        const res = await UserRequest.details(user);
    
        if(res === undefined)
          setData("");
          setError("Não foi possível encontrar, talvez o usuário não exista.");
        if (res.data)
          setData(res.data);
          setError("");
    
        setLoading(false)
      }
      catch (err){
        console.log("data error: ", err)
        setLoading(false)
      }
    }

    getData();
  }, [user])

  if (loading)
  return <Loader />

  return (
    <div className="container">

      <Navbar goBack={goBack} />
      
      <div className="space" />

      <div className="search-result">

        {data && (
          <div className="user-box">

            <img src={data.avatar_url} className="avatar" alt={data.login} />

            <p className="username">{data.login}</p>
            <p>{data.email ? data.email : "Sem e-mail."}</p>
            <p>{data.bio ? data.bio : "Sem bio cadastrada."}</p>

            <div className="space" />

            <div className="user-numbers">
              <span>
                <h1>{data.followers}</h1>
                <h6>Seguidores</h6>
              </span>

              <span>
                <h1>{data.following}</h1>
                <h6>Seguindo</h6>
              </span>

              <span>
                <h1>{data.public_repos}</h1>
                <h6>Repositórios</h6>
              </span>

              <div className="user-social"><br/>
                <a href={`/user/${data.login}/repos`}>Acessar lista de repositórios</a>
              </div>
            </div>
          </div>
        )}

        {error && (
          <p>{error}</p>
        )}
      </div>      
      
      <div className="space" />

      <Footer />

    </div>
  )
}