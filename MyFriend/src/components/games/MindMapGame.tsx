import { Unity, useUnityContext } from "react-unity-webgl";
import Layout from "../Layout/Layout";
const MindMapGame = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/MindM/Build/MindMapGame.loader.js", // Corrected path
        dataUrl: "/MindM/Build/MindMapGame.data", // Corrected path
        frameworkUrl: "/MindM/Build/MindMapGame.framework.js", // Corrected path
        codeUrl: "/MindM/Build/MindMapGame.wasm", // Corrected path
      });
    return (
        <Layout>
            <div style={{ width: "100%", height: "100%" }}>
                <Unity unityProvider={unityProvider}  style={{height: "650px", width: "100%"}}/>
            </div>
        </Layout>
    );
}
export default MindMapGame;