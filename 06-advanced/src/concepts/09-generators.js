
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next());

    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

}


function* idGenerator(){
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}


// Generators
function* myFirstGeneratorFunction(){

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
 
    return 'No más valores';
    yield 'Ya no se puede hacer nada';
}
