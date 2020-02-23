export const fetchCourseLoad = (searchInput, additionalFilter="", successHandler) =>{
    fetch(`${window.api_root['iqueensu']}http://0.0.0.0:8000/api/v1/qcumber/courses/5a285f9d-f911-4872-890e-fa8fd1523f14/=${searchInput}${additionalFilter}`, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    })
    .then(response =>{
        if(successHandler){
            successHandler(response);
        }
    })
    .catch();
}
