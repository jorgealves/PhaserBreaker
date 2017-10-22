var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
    preload: preload,
    create: create,
    update: update,
    render: render
});

function preload() {
    game.load.image('ball', 'assets/ball.png');
    game.load.image("bar", "assets/crates/retina/crate_36.png");
    game.load.image("crate2", "assets/crates/retina/crate_02.png");
    game.load.image("crate3", "assets/crates/retina/crate_03.png");
    game.load.image("crate4", "assets/crates/retina/crate_04.png");
    game.load.image("crate5", "assets/crates/retina/crate_05.png");
    game.load.image("crate6", "assets/crates/retina/crate_06.png");
}

var bar, ball, create2, create3, create4, create5, create6;
var cursors;

function create() {
    game.stage.backgroundColor = "#0072bc";

    game.physics.startSystem(Phaser.Physics.ARCADE);

    bar = game.add.sprite(200, 450, "bar");
    bar.scale.setTo(1.3, 0.3);
    ball = game.add.sprite(0, 0, "ball");
    ball.scale.setTo(1.5,1.5);
    
    cursors = game.input.keyboard.createCursorKeys();
        
    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    
    game.physics.enable([bar,ball], Phaser.Physics.ARCADE);
    
    bar.body.immovable = true;
    
    //  This gets it moving
    ball.body.velocity.setTo(200, 200);

    //  This makes the game world bounce-able
    ball.body.collideWorldBounds = true;
    bar.body.collideWorldBounds = true;

    //  This sets the image bounce energy for the horizontal 
    //  and vertical vectors (as an x,y point). "1" is 100% energy return
    ball.body.bounce.setTo(1, 1);

}

function update() {

    //  Enable physics between the bar and the ball
    game.physics.arcade.collide(bar, ball);

    if (cursors.left.isDown)
    {
        bar.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        bar.body.velocity.x = 300;
    } 
    else
    {
        bar.body.velocity.setTo(0, 0);
    }
    
}


function render(){
    game.debug.spriteInfo(ball, 32, 32);
    game.debug.spriteInfo(bar, 32, 128);
}