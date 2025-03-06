import { Unity, useUnityContext } from "react-unity-webgl";
import Layout from "../Layout/Layout";
export const AnimalSoundGame = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Animals/Build/AnimalS.loader.js", // Corrected path
        dataUrl: "/Animals/Build/AnimalS.data", // Corrected path
        frameworkUrl: "/Animals/Build/AnimalS.framework.js", // Corrected path
        codeUrl: "/Animals/Build/AnimalS.wasm", // Corrected path
      });
    return (
        <Layout>
            <div style={{ width: "100%", height: "100%"}} className="d-flex justify-content-center align-items-center">
                <Unity unityProvider={unityProvider}  style={{height: "500px", width: "100%"}}/>
            </div>
        </Layout>
    );
}