var endState = {

    init : function(score,hp,level) {
        this.score = score;
        this.hp = hp;
        this.level = level;
    },
    create : function() {
        this.background = game.add.sprite(0,0,'asphalt');
        this.background.scale.setTo(2,2);
        this.scoreText = game.add.text(16, 16, 'score: ' + this.score, { fontSize: '32px', fill: '#fff' });
        this.hpText = game.add.text(16, 50, 'hp: ' + this.hp, { fontSize: '32px', fill: '#fff' });
        this.levelText = game.add.text(16, 84, 'you have reached level ' + this.level, { fontSize: '32px', fill: '#fff' });
        this.scoreText.fixedToCamera = true;
        this.hpText.fixedToCamera = true;
        this.levelText.fixedToCamera = true;
        //this.startbutton = game.add.button(700,500,'continue',this.continue,this,0,0,0,0);
        this.restartbutton = game.add.button(300,400,'restart',this.restart,this,0,0,0,0);
    },
    //continue : function() {
        //game.state.start('play');
   //},
    restart : function() {
        game.state.start('menu');
    }
};
