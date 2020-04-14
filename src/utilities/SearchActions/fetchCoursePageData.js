export const fetchCoursePageData = (successHandler) => {
    console.log("before fetch");
    fetch(`${window.api_root['iqueensu']}/api/v1/qcumber/courses/8788c0f0-2f7b-42a3-bbf5-ae9e552b0dc1/`, {
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
