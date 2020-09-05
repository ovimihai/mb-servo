input.onButtonPressed(Button.A, function () {
    angle += 10
    servos.P0.setAngle(angle)
})
input.onGesture(Gesture.TiltLeft, function () {
    while (angle < 180) {
        angle += 10
        servos.P0.setAngle(angle)
    }
})
input.onButtonPressed(Button.B, function () {
    angle += -10
    servos.P0.setAngle(angle)
})
input.onGesture(Gesture.TiltRight, function () {
    while (angle > 0) {
        angle += -10
        servos.P0.setAngle(angle)
    }
})
let angle = 0
angle = 0
basic.showIcon(IconNames.SmallDiamond)
