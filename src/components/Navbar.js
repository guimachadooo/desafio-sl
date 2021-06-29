import React, { useState } from "react";
import Modal from "simple-react-modal";

import "../pages/style.css";

export default function Navbar(props){

  const [about, setAbout] = useState();
  const { goBack } = props;

  function show(){
    setAbout(true)
  }
 
  function close(){
    setAbout(false)
  }

  function goHome(){
    window.location.href="/";
  }

  return (
    <>
      <div className="navbar">
        {goBack && (
          <span className="go-back">
            <a href={goBack}>{"< Voltar"}</a>
          </span>
        )}
        
        <div className="navbar-items">
          <ul>
            { goBack && (
              <li>
                <button className="item" onClick={() => goHome()}>Início</button>
              </li>
            )}
            
            <li>
              <button className="item" onClick={() => show()}>Sobre</button>
            </li>
          </ul>
        </div>
      </div> 

      <Modal show={about} onClose={() => close()} containerClassName="about" transitionSpeed={1000}> 
        <div className="about-info">
          <span className="img-about">
            <img src="https://i.ibb.co/fx9LN3b/gui.png" alt="gui" border="0" />
          </span>

          <span>
            <p>Feito por Gui Machado &copy; 100% React</p>
            <p>Contato: fb.com/guimachadooo</p>
          </span>
        </div>

        <div className="space" />

        <div className="packages">
          <code>
            @testing-library/jest-dom - 5.11.4, <br/>
            @testing-library/react - 11.1.0, <br/>
            @testing-library/user-event - 12.1.10, <br/>
            axios - 0.21.1, <br/>
            react - 17.0.2, <br/>
            react-dom - 17.0.2, <br/>
            react-router-dom - 5.2.0, <br/>
            react-scripts - 4.0.3, <br/>
            simple-react-modal - 0.5.1
          </code>
        </div>
          
        <div className="space" />

        <button onClick={() => close()}>Fechar</button>
      </Modal>   
    </>
  )
}
