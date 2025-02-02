import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    return new Promise((resolve, reject)=> {
        
        const hero = heroes.find(hero => hero.id === id);

        if(hero){
            resolve(hero);
        }

        reject(`Hero with id ${id} not found`);

    });
}