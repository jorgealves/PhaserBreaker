var game = new Phaser.Game(800, 600, Phaser.AUTO,'', { preload: preload, create: create, update: update });

function preload(){
    game.load.image('ball', 'assets/ball.png');
    game.load.image("crate2","assets/crates/retina/crate_02.png");
    game.load.image("crate3","assets/crates/retina/crate_03.png");
    game.load.image("crate4","assets/crates/retina/crate_04.png");
    game.load.image("crate5","assets/crates/retina/crate_05.png");
    game.load.image("crate6","assets/crates/retina/crate_06.png");
}
var ball,create2,create3,create4,create5,create6;
function create (){
    ball=game.add.sprite(0,0,"ball");
    create2=game.add.sprite(0,30,"crate2");
    create3=game.add.sprite(0,60,"crate3");
    create4=game.add.sprite(0,90,"crate4");
    create5=game.add.sprite(0,120,"crate5");
    create6=game.add.sprite(0,150,"crate6");
}

function update(){
    create2.y+=1;
}