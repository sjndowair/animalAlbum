export default function TabBar({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;
  this.$target = document.createElement("div");
  this.$target.className = "tab-bar";
  $app.appendChild(this.$target);

  const tabBar = () => {
    return `<div id="all">전체</div>
       <div id="penguin">펭귄</div>
       <div id="koala">코알라</div>
       <div id="panda">판다</div>`;
  };

  this.render = () => {
    this.$target.innerHTML = tabBar();
    const clicked = document.getElementById(this.state);
    clicked && (clicked.className = "clicked");
    const event = this.$target.querySelectorAll("div");
    event.forEach((option) => {
      option.addEventListener("click", () => {
        this.onClick(option.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
