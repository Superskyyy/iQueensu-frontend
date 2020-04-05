export const convertObjInString = (obj) => {
    let str = "";

    for (const o in obj) {
        if (obj.hasOwnProperty(o)) {
            str = str + "&" + o + "=" + obj[o];
        }
    }

    return str;
};
