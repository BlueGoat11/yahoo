function spawnLevel (num: number) {
    info.changeScoreBy(1)
    forest.setPosition(12, 97)
    forest.y += 390
    sprites.destroy(badStar)
    if (num == 1) {
        tiles.setCurrentTilemap(tilemap`one`)
        scene.setBackgroundImage(assets.image`normalBG`)
    } else if (num == 2) {
        tiles.setCurrentTilemap(tilemap`two`)
        scene.setBackgroundImage(assets.image`dungeonBG`)
    } else {
        tiles.setCurrentTilemap(tilemap`three`)
        scene.setBackgroundImage(assets.image`cityBG`)
    }
    badStar = sprites.create(assets.image`badStar`, SpriteKind.Enemy)
    badStar.setPosition(0, 97)
    badStar.y += 390
    info.startCountdown(3)
    pause(3000)
    badStar.follow(forest, randint(70, 90))
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    temp = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    forest.vy += -200
    pause(500)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    forest,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    forest,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    200,
    false
    )
})
info.onLifeZero(function () {
    sprites.destroy(forest, effects.disintegrate, 500)
    pause(1000)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    spawnLevel(randint(1, 3))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let temp = 0
let badStar: Sprite = null
let forest: Sprite = null
scene.setBackgroundImage(assets.image`start`)
music.play(music.stringPlayable("C5 A B G A F G E ", 70), music.PlaybackMode.UntilDone)
scene.setBackgroundImage(assets.image`normalBG`)
game.showLongText("Your name is Forest, and you have been training your whole life to complete the ancient obstacle course of GOAT EATING SANDWICH.", DialogLayout.Full)
game.showLongText("Suddenly, an (apparently) evil red star starts to follow you. Your only guess is if it touches you, you're cooked. You must get as far as you can through the ancient ruins of GOAT EATING SANDWICH.", DialogLayout.Full)
forest = sprites.create(assets.image`idle`, SpriteKind.Player)
scene.cameraFollowSprite(forest)
tiles.setCurrentTilemap(tilemap`one`)
forest.setStayInScreen(true)
controller.moveSprite(forest, 100, 0)
spawnLevel(1)
info.setLife(5)
forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 95), music.PlaybackMode.UntilDone)
})
forever(function () {
    forest.vy += temp
    temp += 1
})
