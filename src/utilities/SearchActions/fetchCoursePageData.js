export const fetchCoursePageData = (successHandler) => {
    console.log("before fetch");
    fetch(`${window.api_root['iqueensu']}/api/v1/qcumber/courses/5e267a2b-93a1-46a5-88ed-7e2b8e0a949d/`, {
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
