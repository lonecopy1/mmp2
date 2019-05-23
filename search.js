/*var installationer = ["Kloak Syd", "Kloak Nord", "Kloak Øst", "Kloak Vest", "Lygtepæle", "Hestestald", "Kirkegård", "Mad transport"];
var instalLen = installationer.length;

function installationsListe() {
    var input, filter, i;
    input = document.getElementById("searchInput").value;
    filter = input.toUpperCase();
    
    for (i = 0; i < instalLen; i++) {
        
    
        
        
    }
    /* document.getElementById("searchResult").innerHTML = 
}*/


function installationsListe() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput").value;
    filter = input.toUpperCase();
    ul = document.getElementById("searchResult");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            document.getElementById("searchResult").style.visibility = "visible";
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}