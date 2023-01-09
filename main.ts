/**
 * TEACHER DEVICE
 * 
 * A button is pressed when students are on thin ice and must be very careful with their movements as they make their way to solid ground.
 * 
 * B button means the ice is strong and student movement will not put them at risk.
 */
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Yes)
})
radio.setGroup(11)
basic.showIcon(IconNames.Yes)
