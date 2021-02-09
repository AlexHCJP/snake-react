class Food {
    constructor(widthFood){
        this.place = Food.randomPlace()
        this.widthFood = widthFood
    }
    static randomPlace () {
        const x = Math.floor(Math.random() * 30)
        const y = Math.floor(Math.random() * 30)
        return {x, y}
    }
    
    render(ctx) {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.place.x * this.widthFood, this.place.y * this.widthFood, this.widthFood, this.widthFood)
        return this
    }
}

export default Food