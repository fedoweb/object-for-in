export default function orderByProps(obj, sortValue) {
    const result = [];

    if(Object.keys(obj).length === 0) {
        return result;
    }

    const otherValue = Object.keys(obj).filter(key => !sortValue.includes(key)).sort();
    const keys = [...sortValue, ...otherValue];
    
    
    for (const key of keys) {
      result.push({"key": key, "value": obj[key]});
    }

    return result;
}