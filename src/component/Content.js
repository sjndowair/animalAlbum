export default function Content({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  console.log(this.$target);
  this.$target.className = "content";
  $app.appendChiled(this.$target);

  this.render = () => {};
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
