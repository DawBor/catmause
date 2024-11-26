let ghost: game.LedSprite = null
let licznik = 0
let speed = 0
let wynik = 0
let pacman: game.LedSprite = null
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
        if (input.rotation(Rotation.Pitch) < -10) {
            pacman.change(LedSpriteProperty.Y, -1)
        } else if (input.rotation(Rotation.Pitch) > 10) {
            pacman.change(LedSpriteProperty.Y, 1)
        } else if (input.rotation(Rotation.Roll) < -10) {
            pacman.change(LedSpriteProperty.X, -1)
        } else if (input.rotation(Rotation.Roll) > 10) {
            pacman.change(LedSpriteProperty.X, 1)
        }
    }
})
