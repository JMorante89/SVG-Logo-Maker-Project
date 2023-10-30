class Triangle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150,0 224,162 56,162" fill="${this.color}" />`;
    }
}

module.exports = Triangle;