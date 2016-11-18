Template.MainMenu = function() {};

Template.MainMenu.prototype = {
    
    create: function() {
        // tile sprite lets you tile the image as manytimes as you like... I think it make the 
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "MainMenu");
        this.splash.anchor.setTo(.5);
        this.splash.scale.setTo(3);
        //this.game.add.tileSprite(0, 0, 500, 300, 'MainMenu');
        
    },
    
    
    update: function() {
        if(this.game.input.activePointer.justPressed()){
            this.state.start("Game");
        }
    }
};
    
        