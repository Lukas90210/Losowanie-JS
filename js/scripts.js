(function(){

    var btn = document.querySelector("#getNumbers");
        output = document.querySelector("#showNumbers");


    function getRandom(min, max) {

        return Math.floor(Math.random() * (max - min) + min);
        //? lepiej użyć fllor niżrandom ponieważ pierwsza oraz ostatnia liczba ma mniejsze szanse na wylosowanie
        //? Aby było losowało musi być (49 - 1) + 1

    }

    function showRandomNumbers() {

        var numbers = [],
            random;

            for(var i = 0; i < 6; i++) {
            random = getRandom(1, 49);

            while(numbers.indexOf(random) !== -1) {
                random = getRandom(1, 49);
                console.log("Powtórzyła się liczba" + random);
            }

            //? While sprawdza czy liczba się powtarza co daje unikalne liczby

            numbers.push(random); //? Liczby nie będą się powtarzać
        }

        output.value = numbers.join(", ");
        //? wyświetlanie na polu.
    }

    btn.onclick = showRandomNumbers;
    //? button

})();