export const fetchCourseTimeTable = (courseId, sucessHandler) => {
    // update url
    fetch(`${window.api_root['iqueensu']}/api/v1/qcumber/coursesXXX/?search=${courseId}`, {
        // optimize those common attribtes into one place
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    })
    .then(response => {
        if(sucessHandler){
            console.log('handle fetchCourseTimeTable');
            sucessHandler(response);
        }
    })
    .catch();
}