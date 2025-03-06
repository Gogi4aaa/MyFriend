import { Unity, useUnityContext } from "react-unity-webgl";
import Layout from "../Layout/Layout";
const StoryGame = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/StoryGame/Build/StoryGame.loader.js", // Corrected path
        dataUrl: "/StoryGame/Build/StoryGame.data", // Corrected path
        frameworkUrl: "/StoryGame/Build/StoryGame.framework.js", // Corrected path
        codeUrl: "/StoryGame/Build/StoryGame.wasm", // Corrected path
      });
    return (
        <Layout>
        <div style={{ width: "100%", height: "100%" }}>
            <Unity unityProvider={unityProvider}  style={{height: "500px", width: "80%"}}/>
        </div>
        </Layout>
    );
  };
export default StoryGame;