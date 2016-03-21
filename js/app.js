    // create the module and name it scotchApp
    var app = angular.module('app', []);

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
 var tileSource = [{
        Name: "Audi",
        img: ["/images/blank.jpg", "/images/audi.png"]
    },
    {
        Name: "Benz",
        img: ["/images/blank.jpg", "/images/benz.png"]
    },
    {
        Name: "BMW",
        img: ["/images/blank.jpg", "/images/bmw.png"]
    },
    {
        Name: "Ferrari",
        img: ["/images/blank.jpg", "/images/ferrari.png"]
    },
    {
        Name: "Ford",
        img: ["/images/blank.jpg", "/images/ford.png"]
    },
    {
        Name: "Lexus",
        img: ["/images/blank.jpg", "/images/lexus.png"]
    },
    {
        Name: "Mazda",
        img: ["/images/blank.jpg", "/images/mazda.png"]
    },
    {
        Name: "Mini",
        img: ["/images/blank.jpg", "/images/mini.png"]
    },
    {
        Name: "Nissan",
        img: ["/images/blank.jpg", "/images/nissan.png"]
    },
    {
        Name: "Porsche",
        img: ["/images/blank.jpg", "/images/porsche.png"]
    },
    {
        Name: "Subaru",
        img: ["/images/blank.jpg", "/images/subaru.png"]
    },
    {
        Name: "Toyota",
        img: ["/images/blank.jpg", "/images/toyota.png"]
    },
    {
        Name: "VW",
        img: ["/images/blank.jpg", "/images/vw.png"]
    },
    {
        Name: "Alfa",
        img: ["/images/blank.jpg", "/images/alfa.png"]
    },
    {
        Name: "MG",
        img: ["/images/blank.jpg", "/images/mg.png"]
    },
    {
        Name: "Jaguar",
        img: ["/images/blank.jpg", "/images/jag.png"]
    },
    {
        Name: "Rover",
        img: ["/images/blank.jpg", "/images/rover.png"]
    },
    {
        Name: "Honda",
        img: ["/images/blank.jpg", "/images/honda.png"]
    },
    {
        Name: "Audi",
        img: ["/images/blank.jpg", "/images/audi.png"]
},
    {
        Name: "Benz",
        img: ["/images/blank.jpg", "/images/benz.png"]
    },
    {
        Name: "BMW",
        img: ["/images/blank.jpg", "/images/bmw.png"]
    },
    {
        Name: "Ferrari",
        img: ["/images/blank.jpg", "/images/ferrari.png"]
    },
    {
        Name: "Ford",
        img: ["/images/blank.jpg", "/images/ford.png"]
    },
    {
        Name: "Lexus",
        img: ["/images/blank.jpg", "/images/lexus.png"]
    },
    {
        Name: "Mazda",
        img: ["/images/blank.jpg", "/images/mazda.png"]
    },
    {
        Name: "Mini",
        img: ["/images/blank.jpg", "/images/mini.png"]
    },
    {
        Name: "Nissan",
        img: ["/images/blank.jpg", "/images/nissan.png"]
    },
    {
        Name: "Porsche",
        img: ["/images/blank.jpg", "/images/porsche.png"]
    },
    {
        Name: "Subaru",
        img: ["/images/blank.jpg", "/images/subaru.png"]
    },
    {
        Name: "Toyota",
        img: ["/images/blank.jpg", "/images/toyota.png"]
    },
    {
        Name: "VW",
        img: ["/images/blank.jpg", "/images/vw.png"]
    },
    {
        Name: "Alfa",
        img: ["/images/blank.jpg", "/images/alfa.png"]
    },
    {
        Name: "MG",
        img: ["/images/blank.jpg", "/images/mg.png"]
    },
    {
        Name: "Jaguar",
        img: ["/images/blank.jpg", "/images/jag.png"]
    },
    {
        Name: "Rover",
        img: ["/images/blank.jpg", "/images/rover.png"]
    },
    {
        Name: "Honda",
        img: ["/images/blank.jpg", "/images/honda.png"]
    }
    ]


    activate = function () {
        var tileAgg = [];
        for (var i = 0; i < tileSource.length; i++) {
            tileSource[i].index = i;
            tileAgg.push(tileSource[i]);
        }
        console.log(tileAgg);
        $scope.tiles = shuffle(tileAgg);
        console.log(tileAgg);

    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }


        return array;
    }

    //Initial function called
    activate();

    var clickedCounter = 0;
    var clickedTiles = [];
    $scope.matches = 0;
    $scope.turns = 0;
    $scope.isDisabled = false;

    //Function corresponding to an item clicked on
    $scope.selection = function (choice) {

        flip(choice, function() {
            evaluate();
        })
    };

    
    function flip(choice, callback) {
        if (choice.img.length > 1 && clickedTiles.length < 2) {
            choice.img.reverse();
            clickedCounter += 1;
            clickedTiles.push(choice);
        };
        callback();
    };
        
    function evaluate() {
        setTimeout(function () {
            if (clickedCounter == 2 && clickedTiles[0].Name == clickedTiles[1].Name && clickedTiles[0].index != clickedTiles[1].index) {
                clickedTiles[0].img.splice(1, 1);
                clickedTiles[1].img.splice(1, 1);
                clickedCounter = 0
                clickedTiles = [];
                $scope.matches += 1;
                $scope.turns += 1;
                $scope.$apply();
                if ($scope.matches == 18) {
                    alert("Congratulations! It took you " + $scope.turns + " turns to win!");
                };
            }
            else if (clickedCounter == 2) {
                clickedTiles[0].img.reverse();
                clickedTiles[1].img.reverse();
                clickedCounter = 0;
                clickedTiles = [];
                $scope.turns += 1;
                $scope.$apply();
            }
        }, 1000);
    };

});