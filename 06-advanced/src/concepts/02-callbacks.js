import { heroes } from '../data/heroes.js';

/**
 * 
 * @param { HTMLDivElement } element 
 */
export const callbacksComponent = (element) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';
    findHero(id1, (error, hero1) => {
        // element.innerHTML = hero?.name || 'No hay héroe';
            
        if(error){
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) => {
            if(error){
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        });
    });

}


/**
 * 
 * @param { String } id 
 * @param { (error: String|NamedCurveull, hero:Object) => void } callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);

    if(!hero){
        callback(`Hero with id ${id} not found`);
        return; // undefined;
    }

    callback(null, hero);
}
