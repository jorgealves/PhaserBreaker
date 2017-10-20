var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

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
    bar = game.add.sprite(250, 250, "bar");
    ball = game.add.sprite(0, 0, "ball");

    cursors = game.input.keyboard.createCursorKeys();
}

function update() {

    if (cursors.left.isDown) {
        bar.x -= 5;
    }
    else if (cursors.right.isDown) {
        bar.x += 5;
    }
}