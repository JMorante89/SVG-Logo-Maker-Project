class Text {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
    render() {
        return `<text x="150" font-size="60" text-anchor="middle" y="125" fill="${this.color}">${this.text}</text>`;
    }
}

module.exports = Text;