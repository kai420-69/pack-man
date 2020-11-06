namespace SpriteKind {
    export const power = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.transparency16, function (sprite, location) {
	
})
function create_food () {
    fruit = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f . . . . . 
        . . . . . . . . 5 5 5 5 . . . . 
        . . . . . . . 5 5 . 5 5 . . . . 
        . . . . . . 5 5 5 . 5 5 5 . . . 
        . . . . . 5 5 5 . . 5 5 5 . . . 
        . . . . 5 5 5 5 . . . 5 5 5 . . 
        . . . . 5 5 5 . . . . 5 5 5 5 . 
        . . . . 5 5 . . . . . . 5 5 5 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(fruit, myTiles.transparency16)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    if (info.score() == 10) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.power, function (sprite, otherSprite) {
    caneatenemy = true
    otherSprite.destroy()
    pause(5000)
    caneatenemy = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (caneatenemy == true) {
        otherSprite.destroy()
    } else {
        mySprite.destroy()
        game.over(false)
    }
})
let caneatenemy = false
let fruit: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f f . . . . 
    . c d d d d d d e e d d f . . . 
    . c d f d d f d e e b d c . . . 
    c d d f d d f d e e b d c . f f 
    c d e e d d d d e e f c . f e f 
    c d d d d c d e e e f . . f e f 
    . f c c c d e e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f f . 
    . . f f e f e e f e e e e f . . 
    . f e f f e e f f f e e e f . . 
    f d d b d d c f f f f f f b f . 
    f d d c d d d f . . f c d d f . 
    . f f f f f f f . . . f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(hex`1000100002000000000000000000000001010100010100010101000101010100010000000101000101000000000000000100010001010000000000000000010101000101010101000101010100000000000000000100000000010101000101010101010001000001000000000001010101000000010000010101010100000000010001010101000000000001010101000100010101010101010100010000000000000101000000000001000100000000010001010001010001010001000000000100010100010000000000010101000001000101000100000000000000010100010000010001000100000001000000000101000100010301000000010100000000000001`, img`
    . . . . . . . . . . . . 2 2 2 . 
    2 2 . 2 2 2 . 2 2 2 2 . 2 . . . 
    2 2 . 2 2 . . . . . . . 2 . 2 . 
    2 2 . . . . . . . . 2 2 2 . 2 2 
    2 2 2 . 2 2 2 2 . . . . . . . . 
    2 . . . . 2 2 2 . 2 2 2 2 2 2 . 
    2 . . 2 . . . . . 2 2 2 2 . . . 
    2 . . 2 2 2 2 2 . . . . 2 . 2 2 
    2 2 . . . . . 2 2 2 2 . 2 . 2 2 
    2 2 2 2 2 2 . 2 . . . . . . 2 2 
    . . . . . 2 . 2 . . . . 2 . 2 2 
    . 2 2 . 2 2 . 2 . . . . 2 . 2 2 
    . 2 . . . . . 2 2 2 . . 2 . 2 2 
    . 2 . . . . . . . 2 2 . 2 . . 2 
    . 2 . 2 . . . 2 . . . . 2 2 . 2 
    . 2 . 2 . . . 2 2 . . . . . . 2 
    `, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.collectibleBlueCrystal,sprites.castle.shrub], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.castle.shrub)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 10; index++) {
    create_food()
}
let no = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . . . 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 f 2 2 2 2 . . . 
    . . . . . . . 2 2 2 2 2 2 . . . 
    . . . . . . . . 2 2 2 2 2 . . . 
    . . . . . . . 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(no, sprites.dungeon.collectibleBlueCrystal)
no.follow(mySprite)
let power_up = sprites.create(img`
    . . . . . . . 7 . . . . . . . . 
    . . 7 7 . 7 . 7 7 . 7 . 7 . . . 
    . . . 7 7 7 7 . 7 . 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . 4 5 4 4 4 4 5 4 . . . . 
    . . . . 5 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 5 5 5 5 4 4 . . . . 
    . . . . 5 5 5 4 4 4 5 4 . . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . 4 5 4 4 4 5 5 4 . . . . 
    . . . . . 4 4 4 5 4 4 . . . . . 
    . . . . . . 5 4 5 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.power)
tiles.placeOnRandomTile(power_up, myTiles.transparency16)
info.setLife(3)
