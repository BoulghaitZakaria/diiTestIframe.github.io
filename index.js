function test(){
    console.log('this is a test');
    let element = document.getElementsByClassName('slds-modal_prompt');
    if(element){
     parentNode.removeChild(element);
        element.remove();
    }
    console.log('end');
}
