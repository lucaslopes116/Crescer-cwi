export default class Bandeira{
    constructor(){
    }
    
    bandeira(birth){
                
        let div = document.querySelector('body');
        div.className= `${birth}`
    }
}