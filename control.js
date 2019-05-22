/* - skrevet af Lone */
var overskrift = document.getElementById('overskrift');
var media = document.getElementById('media');
var tekst = document.getElementById('tekstindhold');
var startknap = document.getElementById('startknap');
var i;
var insertliste;

var gruppeliste = [
    "Børge Jensen",
    "Heidi Enghave",
    "Kasper Jon",
    "Nikolaj Larsen",
    "Casper Kaspersen",
    "Camilla Sol",
    "Trine Hansen",
    "Andreas Rasmussen",
    "Rasmus Stounberg",
    "Storm Tom Christensen",
    "Marianne Søgaard",
    "Søren Madsen",
    "Villiam Larsen"
]

function display(element) {
    document.getElementById('searchvindue').style.display = 'none';
   if (element.tagName == 'IMG' && element.className == 'close') {/* Hvis man trykker på kryds */
        element.parentNode.style.display = 'none';
    } else if (element.className == 'punkt') { /* Hvis man trykker på et punkt */
        document.getElementById('mainVindue').style.display = 'block';
        createContent(element.id);
    } else if (element.parentNode.classList.contains('bar')) { /* Hvis man trykker på et icon i baren */
        if (element.id == 'search') { /* Hvis det er søg skal der åbnes sin egen vindue*/
            document.getElementById('mainVindue').style.display = 'none';
            document.getElementById(element.id + 'vindue').style.display = 'block';
        } else {
            document.getElementById('mainVindue').style.display = 'block';
            createContent(element.id);
        }
    }
    
}

function createContent(contentID) {
    if (contentID == 'kirke') { /* Indhold til kirkegården */
        overskrift.innerHTML = 'Kirkegården';
        media.style.display = 'block';
        media.innerHTML = '<img src="icons/play.png" class="play">';
        tekst.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        startknap.style.display = 'block';
    } else if (contentID == 'kloak') { /* Indhold til kloakerne */
        overskrift.innerHTML = 'Kloakerne';
        media.style.display = 'block';
        tekst.innerHTML = 'Kloakerne kan stadig ses';
        startknap.style.display = 'block';
    } else if (contentID == 'leaderboard') {/* Indhold til point-talve og gruppelisten */
        overskrift.innerHTML = 'Gruppeliste';
        media.style.display = 'none';
        
        insertliste = '<ul id="gruppeliste">'; 
        for (i = 0; gruppeliste.length > i; i++) {
            if (gruppeliste[i] == gruppeliste[3]){ /* Vi er klassemedlem nr. 3 i listen */
                insertliste += '<li id="you"><span>' + (i+1) + '</span><span>' + gruppeliste[i] + '</span><span>0 point</span></li>';
            } else {
                insertliste += '<li><span>' + (i+1) + '</span><span>' + gruppeliste[i] + '</span><span>0 point</span></li>';
            }
        }
        insertliste += '</ul>';
        
        tekst.innerHTML = insertliste;  
                                       
        startknap.style.display = 'none';
    } 
    else {
        overskrift.innerHTML = 'Fejl';
        tekst.innerHTML = 'Dette punkt er gået i fejl';
    }
}

/*element.src = 'icons/punktgreen.png';*/