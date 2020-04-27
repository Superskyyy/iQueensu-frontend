export const fetchCourseGradeDistribution = (courseCodeAndName, sucessHandler) => {
    // update url
    fetch(`${window.api_root['iqueensu']}/api/v1/qcumber/gradeDistribution/?search=${courseCodeAndName}`, {
        // optimize those common attribtes into one place
        credentials: 'include',
        // mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    })
    .then(response => {
        if(sucessHandler){
            sucessHandler(response);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        console.log('please Login first');
    });
}