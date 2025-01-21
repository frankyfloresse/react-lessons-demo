// This function is a generic function, meaning it can return data of any type T that you specify when calling it
// The key parameter is the name of data you want to retrieve from localStorage
export const retrieveLocalStorage = <T>(key: string) => {
    // Tries to retrieve object from localStorage using the provided key.
    // If object doesn't exist, it returns an empty string ('') to avoid errors when attempting to parse null/undefined
    const object = localStorage.getItem(key) || '';

    // Checks if the retrieved object is empty (falsy). If it is, the function returns an empty object of type T
    if (!object) {
        return {} as T;
    }

    // Parses JSON string back into a JS object.
    // localStorage can only store strings, so data must be stringified when stored and parsed when retrieved
    const parse = JSON.parse(object);
    return parse as T;
}