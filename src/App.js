import { request } from "./component/api.js";
import Content from "./component/Content.js";
import TabBar from "./component/TabBar.js";

export default function App($app) {
  this.state = {
    currentTab: "all",
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: this.state.currentTab,
    onClick: async (item) => {
      this.setState({
        ...this.state,
        currentTab: item,
        photos: await request(),
      });
    },
  });
  const content = new Content({
    $app,
    initialState: this.state.photos,
  });

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };
}
