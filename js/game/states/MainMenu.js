Template.MainMenu = function() {};

Template.MainMenu.prototype = {
    
    create: function() {
        // tile sprite lets you tile the image as manytimes as you like... I think it make the 
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "NewMenu");
        this.splash.anchor.setTo(.5);
        this.splash.scale.setTo(3);
        //this.game.add.tileSprite(0, 0, 500, 300, 'MainMenu');
          //this.game.add.tileSprite(0, 0, 1000, 600, 'NewMenu');
      this.button = this.game.add.button(350, 300, 'StartButton', this.actionOnClick,this);
      this.button.scale.setTo(2);// to make the button smaller
        

   },
    
    actionOnClick: function(){
        this.state.start('Game');
    }
    
};
    
        