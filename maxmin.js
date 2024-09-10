function nilaiMinMax(arryAngka) {
    // Inisialisasi max dan min di dalam fungsi
    var max = arryAngka[0];
    var min = arryAngka[0];

    for(var i = 0; i < arryAngka.length; i++){

        if (max < arryAngka[i]){
            max = arryAngka[i];
    }

    if (min > arryAngka[i]){
        min = arryAngka[i];
    }
}

return {
    max : max,
    min : min,
}

}

// Memanggil fungsi dan mencetak hasilnya
console.log(nilaiMinMax([10, 3, 5, 12.7]));
