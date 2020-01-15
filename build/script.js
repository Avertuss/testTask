function changeListener(event){
    var element = event.target;
        while(element && !element.classList.contains('history__transaction'))
        {
            element = element.parentElement;
        }
        if(element && element.children[1])
        {
            if(element.children[1].classList.contains('history__hide'))
                element.children[1].classList.replace('history__hide','history__show');
            else 
                element.children[1].classList.replace('history__show','history__hide');
        }
    
    }
document.body.addEventListener('click',changeListener);