const cloneObj = (obj) =>  !obj ? undefined : JSON.parse(JSON.stringify(obj));
export default cloneObj;