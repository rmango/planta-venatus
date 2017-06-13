var menuState = {
    create : function () {
      var seedlingMenuYValue = 300;
      this.text = game.add.text(game.world.centerX + 250, 200, "Who do you want to be?",
                                { font: "Arial", fontSize : '24px', fill: '#ffffff', align: "center" });
      //this.button = game.add.button(game.world.centerX + 300,  300, 'seedling', this.setSprite1, this, 0,0,0,0);
      this.button2 = game.add.button(game.world.centerX + 350, seedlingMenuYValue, 'seedlingBrown', this.setSprite2, this, 0,0,0,0);
      this.button3 = game.add.button(game.world.centerX + 400, seedlingMenuYValue, 'seedlingRed', this.setSprite3, this, 0,0,0,0);
      this.button4 = game.add.button(game.world.centerX + 250, seedlingMenuYValue, 'seedlingBlue', this.setSprite4, this, 0,0,0,0);
       },
    //setSprite1 : function () {
        //this.start('seedling');
    //};
    setSprite2 : function () {
        this.start('seedlingBrown');
    },
    setSprite3 : function () {
        this.start('seedlingRed');
    },
    setSprite4 : function () {
        this.start('seedlingBlue');
    },

    start : function (spriteKey) {
        var level = 1;
        var config = {
            spriteKey : spriteKey,
            startX : 32,
            startY : game.world.bottom - 160,
            level : level
        };
        console.log('spriteKey: ' + spriteKey + ' level: ' + level);
        game.state.start('play',false,false,config);
       }
};
