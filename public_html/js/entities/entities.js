// TODO
game.PlayerEntity = me.Entity.extend({
    init: function (x, y, settings){
        this._super(me.Entity, 'init', [x, y, {
             image: "mario",
             spritewidth: "128",
             spriteheight: "128",
             width: 128,
             height: 128,
             getShape: function (){
                 return (new me.Rect( 0, 0, 128, 128)).toPolygon();
             }
        }]);
        
        this.renderable.addAnimation("idle", [4]);
        this.renderable.addAnimation("smallWalk", [9, 10, 11, 12, 13, 14], 80);
        
        this.renderable.setCurrentAnimation("idle");
        
      this.body.setVelocity(5, 20);
    },
    
    update: function(delta){
       if(me.input.isKeyPressed("right")){ 
           this.body.vel.x += this.body.accel.x * me.timer.tick;
    }else{
        this.body.vel.x = 0;
    }
     
     
     
     this._super(me.Entity, "update", [delta]);
     return true;
 }  
    
    
});

game.LevelTrigger() = me.Entity.extend({
    init: function (x, y, settings){
        this._super(me.Entity, 'init', [x, y, settings]);
        this.body.Collision = this.onCollision.bind(this);
        this.level = settings.level;
    },
    
    onCollision: function(){
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);
        me.levelDirector.loadLevel(this.level);
    }
    
});






















