import { Shape } from "./Shape.js"

export class Rectangle extends Shape{
    _xwidth
    _height

    constructor(x,y,xwidth,height){
        super(x,y)
        this._xwidth = xwidth
        this._height = height
    }

    draw(ctx){
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._colour
        ctx.beginPath()
        ctx.rect(this._x,this._y,this._xwidth,this._height)
        ctx.stroke()
    }
}