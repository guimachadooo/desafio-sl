import React, { useEffect, useState } from "react";
import UserRequest from "../requests/User";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

import "./style.css";

export default function RepositoryList(props){

  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState();
  
  const { user } = props.match.params;
  const goBack = `/result/${user}`;

  useEffect(() => {
    const getRepositories = async () => {
      try{
        setLoading(true)
        const res = await UserRequest.repositories(user);
  
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
  }, [user]);

  const showRepositories = () => {
    var repos = data;
    
    var items = "";
    
    if(repos.length > 0){
      items = (
        <div className="repository-box">
          <table>
            <tr>
              <td className="td-table">Nome</td>
              <td className="td-table">Descrição</td>
              <td className="td-table">Ações</td>
            </tr>

            { repos.map((item, index) => (
              <tr key={index}>
                <td className="td-table">
                  {item.name}
                </td>
                <td className="td-table">
                  {item.description ? item.description : "Sem descrição"}
                </td>
                <td className="td-table">
                  <a href={`/user/${user}/repos/${item.name}`} className="more"> Ver mais</a>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )
    }else{
      items = <p>Ops... Nenhum repositório foi criado ainda.</p>
    }

    return items
  }
  
  if (loading)
    return <Loader />

  return (
    <div className="container">
      
      <Navbar goBack={goBack} />

      <div className="space" />

      {showRepositories()}

      <div className="space" />

    </div>
  )
}
