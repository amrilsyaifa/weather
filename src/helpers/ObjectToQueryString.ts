const ObjectToQueryString = (obj: any) => {
    const str = [];
    for (const p in obj)
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p].toLowerCase()));
        }
    return str.join('&');
};

export default ObjectToQueryString;
