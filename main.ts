let wps = 2
let spw = 5
let fkrl = 0.39 * wps + 11.8 * spw - 11.59
control.waitMicros(40)
basic.showNumber(fkrl)
