import { localhostUserToModel } from "../mappers/localhost-user.mapper";



/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async( page = 1 ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
    // console.log(url);

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    // console.log("Tipo de data:", typeof data, Array.isArray(data));
    
    // const users = data.data.map(user => localhostUserToModel(user));
    const users = data.data.map(localhostUserToModel);
    // console.log(users);

    return users;
}