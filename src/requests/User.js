import api from "./Api";

class UserRequest{
  constructor() {
    this.path = "users";
    this.headers = {
      "Content-Type": "application/json",
      "acess_token": "token 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"
    }
  }

  /*
  //  Retorna os detalhes de um usuário do GitHub
  */
  details(params){
    const url = params ? `${ this.path }/${ params }` : this.path

    return api.get(url, { 
      headers: this.headers
    })
      .then((res) => {
        if(res.status === 200){
          return res;
        }
      })
      .catch(function (error) {
        console.log("request error: ", error)
      })
  }

  /*
  //  Retorna os repositórios de um usuário do GitHub
  */
  repositories(params){
    const url = `users/${params}/repos`

    return api.get(url, {
      headers: this.headers
    })
      .then((res) => {
        if(res.status === 200){
          return res;
        }
      })
      .catch(function (error) {
        console.log("request error: ", error)
      })
  }

  /*
  //  Retorna os detalhes de um repositório
  */
  repositoryDetails(params){
    const url = `repos/${params.user}/${params.repo}`

    return api.get(url, {
      headers: this.headers
    })
      .then((res) => {
        if(res.status === 200){
          return res;
        }
      })
      .catch(function (error) {
        console.log("request error: ", error)
      })
  }
}

export default new UserRequest()