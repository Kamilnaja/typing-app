
//wyświetl słowa na ekranie
	var wordBase = {
			area: document.getElementsByClassName("area"),
			words: ["jeden", "dwa", "trzy"],
		
			clear: function () {
				this.area[0].textContent = "";
			},
			add: function (word) {
					this.words.push(word);
					this.clear();
					this.displayAll();
			},
			//wyswietla pojedyncze słowa
			displayAllWords: function () {
				for (var i = 0; i < this.words.length; i++){
					console.log(this.words[i]);
				}
			},
			//wyloguje jedno słowo
			//ok
			displayOneWord: function (word) {
				console.log(this.words[word]);
			},
			//wypisz wszystkie litery pierwszego osobno
			//ok
			displayAllLetters: function (word) {
				for (var i = 0; i < this.words[word].length; i++){
					console.log(this.words[word][i]);
					
					//wyświetla po jednej
					this.area[0].textContent +=  this.words[word][i];

				}
				this.area[0].textContent += " ";
			},
			//zmienia słowa
			//ma wyświetlać tylko jedno
			logNextWord: function() {
				if(true){
					for (var i = 0; i < this.words.length; i++){
						console.log(this.displayAllLetters(i));
					}
				}
			},
			//wypisz wszystkie litery
			displayAll: function () {
					this.clear();
					for (var i = 0; i < this.words.length; i++){
							this.displayAllLetters(i);
				}
			}
	};
	var view = {

	};
	var handlers = {
			start: document.getElementsByClassName("start")[0],
			startState: "off",
			startHandlers: function (){
					if (this.startState === "off"){
							this.start.addEventListener("click", function(event){
									wordBase.displayAll();
									handlers.startState = "on";
									handlers.start.textContent = " działa ";
							});

					}
			}
	};

	handlers.startHandlers();