function display(element) {
   if (element.tagName == 'IMG' && element.className == 'close') {/* Hvis man trykker på kryds */
        element.parentNode.style.display = 'none';
       
    } else if (element.className == 'punkt') { /* Hvis man trykker på et punkt */
        vindue = element.id + 'vindue';
        document.getElementById(vindue).style.display = 'block';
        
    } else if (element.parentNode.classList.contains('bar')) { /* Hvis man trykker på et icon i baren */
        vindue = element.id + 'vindue';
        document.getElementById(vindue).style.display = 'block';
    }
    
}


/*element.src = 'icons/punktgreen.png';*/