var loadState =  {
  preload : function () {
           // Make all the different assets available to the game

           // background options
           game.load.image('sky', 'assets/field_and_sky.png');

           // ledges and other obstacles
           game.load.image('ground', 'assets/platform.png');

           // background of end page
           game.load.image('asphalt', 'assets/asphalt.jpg');

           //  treasures to collect to gain points
           game.load.image('star', 'assets/star.png');

           // buttons
           game.load.image('continue', 'assets/continue.png');
           game.load.image('restart', 'assets/restart.png');

           // non-playing characters
           game.load.atlasJSONArray('mushroomguy', 'assets/MushroomGuyNew.png',
                                    'assets/MushroomGuyNew.json');
           game.load.atlasJSONArray('baddie', 'assets/Slug.png', 'assets/Slug.json');
           game.load.atlasJSONArray('dandelion', 'assets/DandelionEnemyClone.png',
                                    'assets/DandelionEnemyClone.json');

           // level 1 player skin options
           game.load.atlasJSONArray('seedlingBrown', 'assets/SeedlingBrown.png',
                                    'assets/SeedlingBrown.json');
           game.load.atlasJSONArray('seedlingRed', 'assets/SeedlingRed.png',
                                    'assets/SeedlingRed.json');
           game.load.atlasJSONArray('seedlingBlue', 'assets/SeedlingBlue.png',
                                    'assets/SeedlingBlue.json');

           // level 2 player skins
           game.load.atlasJSONArray('flytrapPlayer', 'assets/VenusFlyTrap.png',
                                    'assets/VenusFlyTrap.json');
           game.load.atlasJSONArray('dandelionPlayer', 'assets/DandelionPlayer.png',
                                    'assets/DandelionPlayer.json');
           game.load.atlasJSONArray('succulentPlayer', 'assets/MisterSucculent.png',
                                    'assets/MisterSucculent.json');
         },

  create : function () {
             game.state.start('menu');
         }
};
