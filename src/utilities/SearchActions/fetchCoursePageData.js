export const fetchCoursePageData = (courseUuid, successHandler) => {
    fetch(`${window.api_root['iqueensu']}/api/v1/qcumber/courses/${courseUuid}/`, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    })
        .then(response => {
            if (successHandler) {
                successHandler(response);
            }
        })
        .catch();
}
