class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let p = document.createElement("p")
    p.append('This paragraph has been dynamically added by JavaScript!')
    this.mainContainerEl.append(p)
    return p
  }
}

module.exports = View;