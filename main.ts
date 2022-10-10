input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        basic.showIcon(IconNames.Heart)
        game.addScore(1)
        music.playTone(147, music.beat(BeatFraction.Whole))
    } else {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Angry)
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setScore(0)
basic.clearScreen()
basic.forever(function () {
    sprite.move(1)
    basic.pause(1000)
    sprite.ifOnEdgeBounce()
    if (game.score() == 3) {
        basic.showString("Hello!")
    }
})
