export const fetchCoursePageData = (successHandler) => {
    console.log("before fetch");
    fetch(`${window.api_root['iqueensu']}/api/v1/qcumber/courses/c63f4fb7-b780-4c4b-8481-08709a3b7af0/`, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    })
        .then(response => {
            console.log("in then");
            if (successHandler) {
                console.log('handle fetchSearchResult', response);
                successHandler(response);
            }
        })
        .catch();
    console.log("finished fetch");
}
