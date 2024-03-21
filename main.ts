function girarIzquierda90Grados () {
    // Direccion atras
    // maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
    // maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
    // basic.pause(100)
    // maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    leerBrujula()
    if (gradosBrujula < gradosGiro) {
        // Direccion adelante
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        basic.pause(100)
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        basic.showString("B: " + gradosBrujula)
        basic.showString("G: " + gradosGiro)
    } else {
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
        basic.showString("S")
    }
}
function leerBrujula () {
    gradosBrujula = input.compassHeading()
    if (isLeerBrujula) {
        gradosGiro = (gradosBrujula + 90) % 360
        calculoGrados = (gradosGiro - gradosBrujula) % 360
        basic.pause(20)
        basic.showString("B: " + gradosBrujula)
        basic.showString("G: " + gradosGiro)
        isLeerBrujula = false
    }
}
let calculoGrados = 0
let gradosGiro = 0
let gradosBrujula = 0
let isLeerBrujula = true
input.calibrateCompass()
leerBrujula()
basic.forever(function () {
    girarIzquierda90Grados()
    basic.pause(500)
})
