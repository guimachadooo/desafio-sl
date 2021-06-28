import api from "./Api";

class UserRequest{
  constructor() {
    this.path = "users";
  }

  /*
  //  Retorna os detalhes de um usuário do GitHub
  */
  details(params){
    const url = params ? `${ this.path }/${ params }` : this.path
    const token = "token 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"

    return api.get(url, { 
      headers: { Authorization: token } 
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

    return api.get(url)
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

    return api.get(url)
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