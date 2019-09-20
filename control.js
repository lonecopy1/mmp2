/* - skrevet af Lone */
var overskrift = document.getElementById('overskrift');
var media = document.getElementById('media');
var tekst = document.getElementById('tekstindhold');
var startknap = document.getElementById('startknap');
var mainVindue = document.getElementById('mainVindue');

var i;
var insertliste;
var playbutton = false;
var searchvindue = false;

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
    clearPops()
    media.style.display = 'block';

   // Hvis man trykker på kryds ikonet
   if (element.tagName == 'IMG' && element.className == 'close') {
        element.parentNode.style.display = 'none';
    }
    
    // Hvis man trykker på et punkt
    else if (element.className == 'punkt') {
        mainVindue.style.display = 'block';
        createContentForPunkt(element.id);
    }
    
    // Hvis man trykker på et ikon i baren
    else if (element.parentNode.classList.contains('bar')) {
        if (element.id == 'search') { // Hvis det er søg skal der åbnes et specielt vindue
            mainVindue.style.display = 'none';
            document.getElementById(element.id + 'vindue').style.display = 'block';
            searchvindue = true;
        } else {
            mainVindue.style.display = 'block';
            createContentForVindue(element.id);
        }
    }
    
}

// Indhold til vindue hvis der trykkes på et punkt
function createContentForPunkt(contentID) {
    punkt = findInst(contentID); // Find hvilken installation er tilhørende punktet
    if (punkt) {
        overskrift.innerHTML = punkt.title;
        tekst.innerHTML = punkt.description;
        if (punkt.media) {
            media.innerHTML = punkt.media_URL;
            playbutton = punkt.playbutton;
        }
        //Tjek hvis der er trykket på quiz 
        if (!punkt.visit) {
            startknap.style.display = 'block';
        } else {
            startknap.style.display = 'none';
        }
    }
}

// Indhold til point-talve/gruppelisten
function createContentForVindue(contentID) {
    if (contentID == 'leaderboard') {
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
        tekst.innerHTML = 'Dette vindue er muligvis endnu ikke oprettet eller der er sket en fejl';
    }
}

function quiz() {
    punkt.visit = true;
    if (punkt.playbutton) {
        document.getElementById('play').style.display = 'none';
    }
    tekst.innerHTML = "Hvad er det rigtige svar for denne installation?"
    startknap.style.display = 'none';
    document.getElementsByClassName('svarmuligheder')[0].style.display = 'flex';
}


function clearPops() {
    document.getElementsByClassName('svarmuligheder')[0].style.display = 'none';
    if (searchvindue) {
        document.getElementById('searchvindue').style.display = 'none';
        searchvindue = false;
    }
    if (playbutton) {
        document.getElementById('play').style.display = 'none';
        playbutton = false;
    }
}

/*element.src = 'icons/punktgreen.png';*/