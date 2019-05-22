function installationsListe() {
    var installationer = ["Kloak Syd", "Kloak Nord", "Kloak Øst", "Kloak Vest", "Lygtepæle", "Hestestald", "Kirkegård", "Mad transport"];
    var instalLen = installationer.length;
    console.log = installationer;
    
    var input, filter, a, i, txtValue, output;
    input = document.getElementById("searchvindue");
    filter = input.value.toUpperCase();
    
    
    
    for (i = 0; i < instalLen; i++) {
        a = installationer.forEach;
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        
            installationer[i].style.display = "";
        } else {
            installationer[i].style.display = "none";
        }
    }
    output = document.getElementById("searchresult");
}