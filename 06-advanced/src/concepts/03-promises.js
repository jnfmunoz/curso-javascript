import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeros = (hero1, hero2) => {
        element.innerHTML = `
            <h1>${ hero1.name }</h1>
            <h1>${ hero2.name }</h1>
        `;

    };

    const renderError = (error) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>
        `;
    };

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';

    // Promise
    // findHero(id1)
    //     // .then( superHero => renderHero (superHero));
    //     .then(renderHero)
    //     .catch(error => renderError(error));

    // Promise.all
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then((hero1 , hero2) => renderTwoHeros(hero1, hero2))
    .catch(renderError);

    // Promise hell
    // Forma 1 
    // findHero(id1)
    //     .then((hero1) =>{
    //         findHero(id2)
    //             .then(hero2 => {
    //                 renderTwoHeros(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(error => renderError(error));

    // Forma 2
    // let hero1;

    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero2 => {
    //         renderTwoHeros(hero1, hero2);
    //     })
    //     .catch(renderError);

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
            return;
        }

        reject(`Hero with id ${id} not found`);

    });
}
