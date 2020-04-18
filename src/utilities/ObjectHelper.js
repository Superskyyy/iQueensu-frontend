export const strOp = (str) => {
    return str
      .toString()
      .replace(/\s/g, '')
      .toLowerCase();
  }
  
export const objectValues = (object, logic) => {
    return traverse(object, logic);
}

export const traverse = (o, logic) => {
    var res = null
    for (var i in o) {
        if (i === logic){
            res = strOp(o[i])
            return res
        }
        if (o[i] !== null && typeof(o[i])=="object") {
            //going one step down in the object tree!!
            return traverse(o[i], logic);
        }
    }
}
  
export const filter = (val, data, logic) => {
    return data.filter(el => {
        return !!val.length ? objectValues(el,logic) === (strOp(val)) : true;
    });
}


export const convertObjInString = (obj) =>{
    let str = '';

    for (var o in obj) {
        if(obj.hasOwnProperty(o)){
            str = str + "&" + o + "=" + obj[o];
        }
    }

    return str;
}