import { Circle } from "./class/Circle.js";
import { Line } from "./class/Line.js";
import { Rectangle } from "./class/Rectangle.js";
import { Square } from "./class/Square.js";

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const x2_input = document.querySelector('#x2')
const y2_input = document.querySelector('#y2')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('form')
const line_width_input = document.querySelector('input[type=number]')
const colour_input = document.querySelector('input[type=color]')

const updateUI =(label3,label4)=> {
    document.querySelector('div#third label').innerHTML = label3

    if (label4 !== undefined){
        document.querySelector('div#fourth label').innerHTML = label4
        document.querySelector('div#fourth label').style.display = "inline-block"
        document.querySelector('div#fourth input').style.display = "inline-block"
        
    }
    else{
        document.querySelector('div#fourth label').style.display = "none"
        document.querySelector('div#fourth input').style.display = "none"
    }
}

radio_form.addEventListener('click', () =>{
    const shape = radio_form['shape'].value
    switch (shape) {
        case 'line':
            updateUI('x2','y2')
            break
            case 'circle':
            updateUI('width:')
            break
            case 'rectangle':
            updateUI('xwidth','height:')
            break
            case 'square':
            updateUI('width:')
            break
    }

})

draw_button.addEventListener('click',() => {
    const shape = radio_form['shape'].value
    switch (shape){
        case 'line':
        drawLine()

        break
        case 'circle':
        drawCircle()
        break
        case 'rectangle':
        drawRectangle()

        break
        case 'square':
        drawSquare()

        break
    }
})

const drawCircle = () => {
    const x = x_input.value
    const y = y_input.value
    const width = document.querySelector('div#third input').value
    const lineWidth = line_width_input.value
    const colour = colour_input.value
    const circle = new Circle(x,y,width/2)
    circle.setLineWidth = lineWidth
    circle.setcolour = colour
    circle.draw(ctx)
}
const drawLine = () => {
    const x = x_input.value
    const y = y_input.value
    const x2 = x2_input.value
    const y2 = y2_input.value
    const colour = colour_input.value
    const lineWidth = line_width_input.value
    const line = new Line(x,y,x2,y2)
    line.setLineWidth = lineWidth
    line.setcolour = colour
    line.draw(ctx)
}
const drawRectangle = () => {
    const x = x_input.value
    const y = y_input.value
    const xwidth = y2_input.value
    const height = x2_input.value
    const colour = colour_input.value
    const lineWidth = line_width_input.value

    const rectangle = new Rectangle(x,y,xwidth,height)
    rectangle.setLineWidth = lineWidth
    rectangle.setcolour = colour
    rectangle.draw(ctx)
}
const drawSquare = () => {
    const x = x_input.value
    const y = y_input.value
    const xwidth = x2_input.value
    const height = x2_input.value
    const colour = colour_input.value
    const lineWidth = line_width_input.value

    const square = new Square(x,y,xwidth,height)
    square.setLineWidth = lineWidth
    square.setcolour = colour
    square.draw(ctx)

}