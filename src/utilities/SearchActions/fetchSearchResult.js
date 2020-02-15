export const fetchSearchResult = (searchInput, additionalFilter="", successHandler) =>{
    // fetch(`${window.api_root['iqueensu']}/api/v1/qcumber/courses/?search=${searchInput}${additionalFilter}`, {
    //     mode: 'cors',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     method: 'GET',
    // })

    // mock temp
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(response =>{
        if(successHandler){
            console.log('handle');
            successHandler(response);
        }
    })
    .catch();
}