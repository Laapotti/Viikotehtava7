export class Shape {
    _x
    _y
    _lineWidth
    _colour

    constructor(x,y,lineWidth = 1,colour = "black"){
        this._x = x
        this._y = y
        this._lineWidth = lineWidth
        this._colour = colour
    }

    set setLineWidth(lineWidth){
        this._lineWidth = lineWidth
    }

    set setcolour(colour){
        this._colour = colour
    }

}