import Content from "./component/Content.js";
import TabBar from "./component/TabBar.js";
import { request } from "./component/api.js";

export default function App($app) {
  this.state = {
    currentTab: "all",
    photos: [],
  };

  const tabBar = new TabBar({
    initialState: "",
    onClick: (name) => {
      this.setState({
        ...this.state,
        currentTab: name,
        photos,
      });
    },
  });

  const content = new Content();

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  const init = async () => {
    try {
      const initialPhotos = await request();
      this.setState({
        ...this.state,
        photos: initialPhotos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  init();
}
