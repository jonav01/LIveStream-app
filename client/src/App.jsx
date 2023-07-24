import { Typography, AppBar } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import { sxStyles } from "./App.styles";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

function App() {
  const styles = sxStyles();
  return (
    <div className={styles.wrapper}>
      <AppBar sx={styles.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
