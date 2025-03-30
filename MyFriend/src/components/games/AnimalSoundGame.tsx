import { Unity, useUnityContext } from "react-unity-webgl";
import Layout from "../Layout/Layout";
export const AnimalSoundGame = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Animals/Build/NOIT 2023-2024.loader.js", // Corrected path
        dataUrl: "/Animals/Build/NOIT 2023-2024.data", // Corrected path
        frameworkUrl: "/Animals/Build/NOIT 2023-2024.framework.js", // Corrected path
        codeUrl: "/Animals/Build/NOIT 2023-2024.wasm", // Corrected path
      });
    return (
        <Layout>
            <div style={{ width: "100%", height: "100%"}} className="d-flex justify-content-center align-items-center">
                <Unity unityProvider={unityProvider}  style={{height: "500px", width: "60%"}}/>
            </div>
        </Layout>
    );
}