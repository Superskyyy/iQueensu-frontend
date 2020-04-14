export const fetchCoursePageData = (courseCode, successHandler) =>{
    fetch(`${window.api_root['iqueensu']}/api/v1/qcumber/courses/c63f4fb7-b780-4c4b-8481-08709a3b7af0/${courseCode}`, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    })
        .then(response =>{
            if(successHandler){
                console.log('handle fetchSearchResult');
                successHandler(response);
            }
        })
        .catch();
}
