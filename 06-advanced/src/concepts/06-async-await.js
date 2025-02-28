import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371fd55e2e2a30fe1ccb1';

    

}

const findHero = async() => {
    
    const hero = heroes.find(hero => hero.id === id);

    if(!hero)
        throw `Hero with id ${id} not found`;

    return hero.name;

}