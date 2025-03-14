import modalHtml from './render-modal.html?raw';
import './render-modal.css'
import { User } from '../../models/user';


let modal, form;
let loadedUser;

/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async( id ) => {
    
    modal?.classList.remove('hide-modal');

    if( !id ) return;
    const user = await(getUserById(id));

}

export const hideModal = () => {

    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * 
 * @param {User} user 
 */
const setFormValue = ( user ) => {

}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = ( element, saveUserCallback ) => {
    
    if( modal ) return;
    
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    modal.addEventListener( 'click', (e) =>{
        if(e.target.className === 'modal-container'){
            hideModal();
        }
    });

    form.addEventListener('submit', async(e) =>{
        e.preventDefault();

        const formData = new FormData(form);
        const userLike = {};

        for(const [key, value] of formData){
            if(key === 'balance'){
                // userLike[key] = +value;
                userLike[key] = Number(value);
                continue;
            }

            if(key === 'isActive'){
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }

            userLike[key] = value;

        }

        // console.log(userLike);
        
        await saveUserCallback(userLike);
        hideModal();
        
        
    });

    element.append(modal);

}   