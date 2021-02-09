class Snake {

    constructor(snake = [], widthDots = 12.5) {
        this.snake = snake
        this.widthDots = widthDots
        
    }

    getLengthSnake() {
        return this.snake.length
    }

    rotate (direction) {
        const indexHead = this.getLengthSnake() - 1
        let head = { ...this.snake[indexHead] }
        switch (direction) {
            case 87:
                head.y--
                break
            case 68:
                head.x++
                break
            case 83:
                head.y++
                break
            case 65:
                head.x--
                break
        }
        return head
    }
    static teleport (head) {
        switch(head.x) {
            case 30:
                head.x = 0
                break
            case -1:
                head.x = 29
        }
        switch(head.y) {
            case 30:
                head.y = 0
                break
            case -1:
                head.y = 29        
        }
        return head
    }

    move (direction) {
        const newSnake = new Snake()
        for (const i in this.snake) {
            if(i == this.getLengthSnake() - 1){
                newSnake.snake.push(Snake.teleport(this.rotate(direction)))
            }else {
                const body = this.snake[Number(i) + 1]
                newSnake.snake.push(body)
            }
        }
        return newSnake
    }

    isEat(food) {
        const index = this.snake.findIndex((value)=>{
            return value.x === food.place.x && value.y === food.place.y
        })
        return index != -1
    }
    addDots(direction) {
        const newSnake = new Snake(this.snake, this.widthDots)
        newSnake.snake.push(Snake.teleport(this.rotate(direction)))
        return newSnake
    }
    render (ctx) {
        ctx.fillStyle = 'black'
        this.snake.forEach((val)=>{
            ctx.fillRect(val.x * this.widthDots, val.y * this.widthDots, this.widthDots, this.widthDots)
        })
        return this
    }

}

export default Snake