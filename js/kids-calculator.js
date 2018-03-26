function countTo(n) {
    for (var i = 1; i<=n; i++) {
    console.info(i);

    }
}
countTo(10);

function addNumbers(a, b) {
        console.info('primul numar este ' + a);
        console.info('al doilea numar este ' + b);

        for(;b > 0;){
            a++;// luam un deget de la a
            b--; // punem un deget la b
            console.info(a+ ' -  au mai ramas ' + (b-1) +' degetele')
        }
        console.info('suma este:' + a)
}

var count= addNumbers(5, 3);