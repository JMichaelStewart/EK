angular.module('ek.controllers', [])
    .controller('deckController', ['$scope', '$timeout',
       function($scope, $timeout) {
           $scope.deck = {};

           $scope.deck.cards = [
                { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra" },
                { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra" },
                { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra" },
                { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra" },
                { name: 'Dharmanian', image: 'css/cards/dharmanian.jpg', type:"Tundra" },
                { name: 'Moss Dragon', image: 'css/cards/moss_dragon.jpg', type:"Forest" },
                { name: 'Lava Destroyer', image: 'css/cards/lava_destroyer.jpg', type:"Mountain" },
                { name: 'Fire Kirin', image: 'css/cards/fire_kirin.jpg', type:"Forest" },
                { name: 'Celestial Touchstone', image: 'css/cards/celestial_touchstone.jpg', type:"Forest" },
                { name: 'Armored Sumatran', image: 'css/cards/armored_sumatran.jpg', type:"Forest" },
            ];

            $scope.deck.runes = [
               { name: 'Blizard', image: 'css/runes/blizzard.jpg', type: 'Water'},
               { name: 'Blizard', image: 'css/runes/arctic_freeze.jpg', type: 'Water'},
               { name: 'Blizard', image: 'css/runes/lightning.jpg', type: 'Air'},
               { name: 'Blizard', image: 'css/runes/permafrost.jpg', type: 'Water'}
            ];

            $scope.available = [
                { name: 'Armored Sumatran', image: 'css/cards/armored_sumatran.jpg', type: 'Forest' },
                { name: 'Moss Dragon', image: 'css/cards/moss_dragon.jpg', type: 'Forest'  },
                { name: 'Dire Snapping Turtle', image: 'css/cards/dire_snapping_turtle.jpg', type: 'Mountain'  },
                { name: 'Dire Snapping Turtle', image: 'css/cards/dire_snapping_turtle.jpg', type: 'Mountain'  },
                { name: 'Giant Mud Larva', image: 'css/cards/giant_mud_larva.jpg', type: 'Swamp'  },
                { name: 'Fire Demon', image: 'css/cards/fire_demon.jpg', type: 'Mountain'  },
                { name: 'Fire Demon', image: 'css/cards/fire_demon.jpg', type: 'Mountain' },
                { name: 'Fire Demon', image: 'css/cards/fire_demon.jpg', type: 'Mountain' },
                { name: 'Fire Demon', image: 'css/cards/fire_demon.jpg', type: 'Mountain' },
                { name: 'Night Elf Ranger', image: 'css/cards/night_elf_ranger.jpg', type: 'Forest' },
                { name: 'Night Elf Ranger', image: 'css/cards/night_elf_ranger.jpg', type: 'Forest' }
            ];

            $scope.availableRunes = [];

            $scope.Filter = []; //['Mountain', 'Tundra', 'Swamp', 'Forest'];
            $scope.runeFilter = []; //['Air', 'Water', 'Fire', 'Earth'];

            $scope.select2Options = {
                'multiple': true,
                'simple_tags': true,
                'tags': ['Mountain', 'Swamp', 'Tundra', 'Forest']
            };

            $scope.showType = function(card) {
                return $scope.Filter.indexOf(card.type) > -1 || $scope.Filter.length == 0;
            };

            $scope.showRuneType = function(rune) {
                return $scope.runeFilter.indexOf(rune.type) > -1 || $scope.runeFilter.length == 0;
            };

            $scope.isOn = function(type) {
                return $scope.Filter.indexOf(type) != -1 || $scope.runeFilter.indexOf(type) != -1;
            };

            $scope.addFilter = function(type) {
                var idx = $scope.Filter.indexOf(type);
                if(idx != -1) {
                    $scope.Filter.splice(idx, 1);
                } else {
                    $scope.Filter.push(type);
                }
            };

            $scope.addRuneFilter = function(type) {
                var idx = $scope.runeFilter.indexOf(type);
                if(idx != -1) {
                    $scope.runeFilter.splice(idx, 1);
                } else {
                    $scope.runeFilter.push(type);
                }
            };

            $scope.addToDeck = function(card) {
                var idx = getIndexOfCard($scope.available, card);

                for(var i = 0; i < $scope.deck.cards.length; ++i) {
                    if($scope.deck.cards[i].name == null) {
                        $scope.deck.cards[i] = card;
                        $scope.available.splice(idx, 1);
                        return;
                    }
                }
            };

            $scope.removeFromDeck = function(idx) {
                //now add it to the available card list
                $scope.available.push($scope.deck.cards[idx]);

                //remove from deck
                var card = $scope.deck.cards[idx] = { name: null, image: 'css/cards/blank.jpg' };
            };

            function getIndexOfCard(list, item) {
                for(var i = 0; i < list.length; ++i) {
                    if(list[i].name == item.name) {
                        return i;
                    }
                }
                return -1;
            };

            $scope.addRuneToDeck = function(rune) {
                var idx = getIndexOfCard($scope.availableRunes, rune);

                for(var i = 0; i < $scope.deck.runes.length; ++i) {
                    if($scope.deck.runes[i].name == null) {
                        $scope.deck.runes[i] = rune;
                        $scope.availableRunes.splice(idx, 1);
                        return;
                    }
                }
            };

            $scope.removeRuneFromDeck = function(idx) {
                //now add it to the available card list
                $scope.availableRunes.push($scope.deck.runes[idx]);

                //remove from deck
                var card = $scope.deck.runes[idx] = { name: null, image: 'css/runes/blank.jpg' };
            };
        }]);
