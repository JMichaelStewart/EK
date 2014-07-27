angular.module('ek.controllers', [])
    .controller('deckController', ['$scope',
       function($scope) {
            $scope.deck = [
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

            $scope.Filter = []; //['Mountain', 'Tundra', 'Swamp', 'Forest'];

            $scope.select2Options = {
                'multiple': true,
                'simple_tags': true,
                'tags': ['Mountain', 'Swamp', 'Tundra', 'Forest']
            };

            $scope.showType = function(card) {
                return $scope.Filter.indexOf(card.type) > -1 || $scope.Filter.length == 0;
            };

            $scope.isOn = function(type) {
                return $scope.Filter.indexOf(type) != -1;
            };

            $scope.addFilter = function(type) {
                var idx = $scope.Filter.indexOf(type);
                if(idx != -1) {
                    $scope.Filter.splice(idx, 1);
                } else {
                    $scope.Filter.push(type);
                }
            };

            $scope.addToDeck = function(card) {
                var idx = getIndexOfCard($scope.available, card);

                for(var i = 0; i < $scope.deck.length; ++i) {
                    if($scope.deck[i].name == null) {
                        $scope.deck[i] = card;
                        $scope.available.splice(idx, 1);
                        return;
                    }
                }
            };

            $scope.removeFromDeck = function(idx) {
                //now add it to the available card list
                $scope.available.push($scope.deck[idx]);

                //remove from deck
                var card = $scope.deck[idx] = { name: null, image: 'nothing.png' };
            };

            function getIndexOfCard(list, item) {
                for(var i = 0; i < list.length; ++i) {
                    if(list[i].name == item.name) {
                        return i;
                    }
                }
                return -1;
            };

            $timeout(function() {
                window.scrollTo(0, 1);
            }, 0);
        }]);
