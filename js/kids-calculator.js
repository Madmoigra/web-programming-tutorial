function countTo(n) {
    for (var i = 1; i<=n; i++) {
    console.info(i);

    }
}
countTo(10);

function addNumbers(a, b) {
        console.info('primul numar este ' + a);
        console.info('al doilea numar este ' + b);
        var suma= a;// numarul cel mai mare
        var degete = b; // numarul cel mai mic
    if(a<b){
        suma=b;
        degete=a;
    }
        while(degete){
            suma++;// luam un deget de la a
            degete--; // punem un deget la b
            console.info(suma+ ' -  au mai ramas ' + (degete-1) +' degetele')
        }
        console.info('suma este:' + suma)
}

var count= addNumbers(2, 6);