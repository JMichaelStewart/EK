angular.module('ek.controllers', [])
    .controller('deckController', ['$scope',
       function($scope) {

           $scope.card1 = { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra" };
           $scope.card2 = { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra" };
           $scope.card3 = { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra" };
           $scope.card4 = { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra" };
           $scope.card5 = { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra" };

            $scope.deck = [
                { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra", css:"taiga_general" },
                { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra", css:"taiga_general" },
                { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra", css:"taiga_general" },
                { name: 'Taiga General', image: 'css/cards/taiga_general.jpg', type:"Tundra", css:"taiga_general" },
                { name: 'Dharmanian', image: 'css/cards/dharmanian.jpg', type:"Tundra" },
                { name: 'Moss Dragon', image: 'css/cards/moss_dragon.jpg', type:"Forest" },
                { name: 'Lava Destroyer', image: 'css/cards/lava_destroyer.jpg', type:"Mountain" },
                { name: 'Fire Kirin', image: 'css/cards/fire_kirin.jpg', type:"Forest" },
                { name: 'Celestial Touchstone', image: 'css/cards/Celestial_Touchstone.jpg', type:"Forest" },
                { name: 'Armored Sumatran', image: 'css/cards/Armored_Sumatran.jpg', type:"Forest" },
            ];

            $scope.available = [
                { name: 'Armored Sumatran', image: 'css/cards/armored_sumatran.jpg', type: 'Forest' },
                { name: 'Moss Dragon', image: 'css/cards/moss_dragon.jpg', type: 'Forest'  },
                { name: 'Dire Snapping Turtle', image: 'css/cards/dire_snapping_turtle.jpg', type: 'Mountain'  },
                { name: 'Dire Snapping Turtle', image: 'css/cards/dire_snapping_turtle.jpg', type: 'Mountain'  },
                { name: 'Giant Mud Larva', image: 'css/cards/Giant_Mud_Larva.jpg', type: 'Swamp'  },
                { name: 'Fire Demon', image: 'css/cards/fire_demon.jpg', type: 'Mountain'  },
                { name: 'Fire Demon', image: 'css/cards/fire_demon.jpg', type: 'Mountain' },
                { name: 'Fire Demon', image: 'css/cards/fire_demon.jpg', type: 'Mountain' },
                { name: 'Fire Demon', image: 'css/cards/fire_demon.jpg', type: 'Mountain' },
                { name: 'Night Elf Ranger', image: 'css/cards/night_elf_ranger.jpg', type: 'Forest' },
                { name: 'Night Elf Ranger', image: 'css/cards/night_elf_ranger.jpg', type: 'Forest' }
            ];

            $scope.Filter = ['Mountain', 'Tundra', 'Swamp', 'Forest'];

            $scope.select2Options = {
                'multiple': true,
                'simple_tags': true,
                'tags': ['Mountain', 'Swamp', 'Tundra', 'Forest']
            };

            $scope.showType = function(card) {
                return $scope.Filter.indexOf(card.type) > -1
            };

            $scope.addToDeck = function(idx) {
                var card = $scope.available[idx];

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
        }]);
