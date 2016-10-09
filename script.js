(function () {
    'use strict';
    var validate = {
        startHandlers: function () {
            document.addEventListener("keyup",
                    function checkLetter() {
                var yourText = document.getElementById("yourText");
                var inputValue = document.getElementById('input').value;
                var charAtMatch = document.getElementById('area').innerHTML.charAt(inputValue.length - 1);
                if (event.which <= 90 && event.which >= 48 ||  event.which === 32){
                    if (event.key === charAtMatch) {
      //dodaj span do każdej litery w area, która była sprawdzona || span ma klasę good

                        var x = charAtMatch.replace(charAtMatch, "<span class='good'>" + charAtMatch + "</span>");
                        yourText.innerHTML = yourText.innerHTML + x;
                    } else {
                        var y = charAtMatch.replace(charAtMatch, "<span class='bad'>" + charAtMatch + "</span>");
                        yourText.innerHTML = yourText.innerHTML + y;
                }
            }
            });
        }
    };
    validate.startHandlers();
}());