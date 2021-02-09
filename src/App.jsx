import React, { useEffect } from 'react'
import useClickKeyboard from './hooks/useClickKeyboard'
import Snake from './classes/Snake'
import Food from './classes/Food'






export const App = () => {
    const canvasRef = React.useRef()
    const contextRef = React.useRef()
    const widthDots = 12.5
    const [snake, setSnake] = React.useState(new Snake([
        {x: 0, y: 0},
        {x: 1, y: 0},
        {x: 2, y: 0},
    ], widthDots))
    const [food, setFood] = React.useState(new Food(widthDots))
    

    useEffect(()=> {
        const canvas = canvasRef.current
        canvas.width = widthDots * 30
        canvas.height = widthDots * 30
        
        const context = canvas.getContext('2d')
        contextRef.current = context
    }, [])

    const [direction] = useClickKeyboard(68, [68, 87, 83, 65])

    

    useEffect(() => {
        const timer = setInterval(() => {
            contextRef.current.clearRect(0, 0, widthDots * 30, widthDots * 30)
            setSnake(snake.move(direction))
            if(snake.isEat(food)) {
                setFood(new Food(widthDots))
                setSnake(snake.addDots(direction))
            }
            food.render(contextRef.current)
            snake.render(contextRef.current)
        }, 50);
        return () => clearInterval(timer);
    })

    

    return (
        <div>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}>

            </canvas>
        </div>
    )
}