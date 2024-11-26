let pacman: game.LedSprite = null
let wynik = 0
let speed = 0
let licznik = 0
let ghost: game.LedSprite = null
basic.showString("CAT & MOUSE")
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.clearScreen()
basic.showString("GO")
basic.forever(function () {
    ghost = game.createSprite(4, 4)
    licznik = 0
    speed = 800
    wynik = 0
    ghost.change(LedSpriteProperty.Blink, 10)
    while (true) {
        basic.pause(speed)
        if (ghost.get(LedSpriteProperty.X) < pacman.get(LedSpriteProperty.X)) {
            ghost.change(LedSpriteProperty.X, 1)
        } else if (ghost.get(LedSpriteProperty.X) > pacman.get(LedSpriteProperty.X)) {
            ghost.change(LedSpriteProperty.X, -1)
        } else if (ghost.get(LedSpriteProperty.Y) < pacman.get(LedSpriteProperty.Y)) {
            ghost.change(LedSpriteProperty.Y, 1)
        } else if (ghost.get(LedSpriteProperty.Y) > pacman.get(LedSpriteProperty.Y)) {
            ghost.change(LedSpriteProperty.Y, -1)
        }
        if (licznik >= 5) {
            speed += -50
            licznik = 0
            game.addScore(1)
        }
        if (speed <= 300) {
            speed = 300
        }
        if (ghost.isTouching(pacman)) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
            game.gameOver()
        }
        licznik += 1
        wynik += 1
    }
})
basic.forever(function () {
    pacman = game.createSprite(2, 2)
    while (true) {
        basic.pause(100)
        if (input.rotation(Rotation.Pitch) < -5) {
            pacman.change(LedSpriteProperty.Y, -1)
        } else if (input.rotation(Rotation.Pitch) > 5) {
            pacman.change(LedSpriteProperty.Y, 1)
        } else if (input.rotation(Rotation.Roll) < -5) {
            pacman.change(LedSpriteProperty.X, -1)
        } else if (input.rotation(Rotation.Roll) > 5) {
            pacman.change(LedSpriteProperty.X, 1)
        }
    }
})
