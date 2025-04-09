export default function Content({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  $app.appendChild(this.$target);

  this.template = () => {
    let temp = [];
    this.state.forEach((photo) => {
      console.log(photo);
      temp.push(`<img src="${photo.url}">`);
    });
    return temp.join("");
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
