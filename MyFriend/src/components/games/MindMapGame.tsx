import { Unity, useUnityContext } from "react-unity-webgl";
import Layout from "../Layout/Layout";
const MindMapGame = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/MindM/Build/MindM.loader.js", // Corrected path
        dataUrl: "/MindM/Build/MindM.data", // Corrected path
        frameworkUrl: "/MindM/Build/MindM.framework.js", // Corrected path
        codeUrl: "/MindM/Build/MindM.wasm", // Corrected path
      });
    return (
        <Layout>
            <div style={{ width: "100%", height: "100%" }}>
                <Unity unityProvider={unityProvider}  style={{height: "700px", width: "100%"}}/>
            </div>
        </Layout>
    );
}
export default MindMapGame;