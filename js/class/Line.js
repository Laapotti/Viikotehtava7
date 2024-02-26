import { Shape } from "./Shape.js"

export class Line extends Shape{

    _y2
    _x2

    constructor(x,y,x2,y2){
        super(x,y)
        this._x2 = x2
        this._y2 = y2
    }

    draw(ctx){
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._colour
        ctx.beginPath()
        ctx.moveTo(this._x, this._y)
        ctx.lineTo(this._x2, this._y2)
        ctx.stroke()
    }
}