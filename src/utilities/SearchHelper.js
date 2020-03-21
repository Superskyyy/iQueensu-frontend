

export const convertObjInString = (obj) =>{
    let str = '';

    for (var o in obj) {
        if(obj.hasOwnProperty(o)){
            str = str + "&" + o + "=" + obj[o];
        }
    }

    return str;
}
    
