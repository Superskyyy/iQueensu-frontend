export const fetchSearchResult = (searchInput, additionalFilter = "", successHandler) => {
    fetch(`${window.api_root["iqueensu"]}/api/v1/qcumber/courses/?search=${searchInput}${additionalFilter}`, {
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        method: "GET",
    })
        .then((response) => {
            if (successHandler) {
                console.log("handle fetchSearchResult");
                successHandler(response);
            }
        })
        .catch();
};
