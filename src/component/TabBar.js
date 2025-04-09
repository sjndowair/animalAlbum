export default function TabBar({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;

  this.$target = document.createElement("div");
  this.$target.className = "tab-bar";
  $app.appendChild(this.$target);

  this.template = () => {
    return `<div id="all">전체</div>
    <div id="penguin">펭귄</div>
    <div id="koarla">코알라</div>
    <div id="panda">판다</div>`;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
}
