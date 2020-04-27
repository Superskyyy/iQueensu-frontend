export const login = (username, password, successHandler, errHandler) =>{
    fetch(`${window.api_root['iqueensu']}/api/v1/qcumber/${username}${password}`, {
        credentials: 'include',
        // mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ username, password })
    })
    .then(response =>{
        // get the token
        if(successHandler){
            successHandler(response);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errHandler(error);
      });
}