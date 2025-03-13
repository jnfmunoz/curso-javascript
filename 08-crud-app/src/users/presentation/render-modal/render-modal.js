import modalHtml from './render-modal.html?raw';
import './render-modal.css'


let modal, form;

// TODO: cargar usuario por id
export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {

    modal?.classList.add('hide-modal');

    // TODO: reset del formulario
    form?.reset();

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