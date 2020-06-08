export class Logic {
    constructor() {
        this.lastUpdate = performance.now()

        this.updateRate = 32
        
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.update = this.update.bind(this)
        
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        this.rAF = requestAnimationFrame(this.update);
    }

    update() {
        if (this.lastUpdate < performance.now() - this.updateRate) {
            this.lastUpdate = performance.now()

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.font = '90px Arial'
            this.ctx.fillStyle = 'black'
            this.ctx.fillText('hello world', 0, 90)
        }
        this.rAF = requestAnimationFrame(this.update);
    }
}