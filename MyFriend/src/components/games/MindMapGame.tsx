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
            <div className="mt-5" style={{ width: "60%", height: "100%"}}>
                <h4 className="p-3" style={{fontFamily: "cursive",background: "rgba(255, 255, 255, 0.6)" , border: "3px solid rgba(255, 255, 255, 0.6)", borderRadius: "15px"}}>
                    Инструкции за игра „Какво с какво?“ <br />
                    Гледай внимателно – В средата на екрана има картинка, която показва дадена дейност.

                    Разгледай предметите – Около централното изображение има различни предмети.

                    Избери правилните предмети – Натисни тези, които са свързани с дейността в средата.

                    <br />Ако избереш правилно – Ще получиш точка, ще се нарисува линия между предмета и централното изображение, а също така ще чуеш звук за верен отговор.

                    Продължи играта – След като намериш всички правилни предмети, ще се появи нова мисловна карта.

                    <br />Спечели играта – Когато преминеш през всички мисловни карти, <br /> ще видиш екрана за победа.

                    Играй отново, когато пожелаеш.
                </h4>
            </div>
        </Layout>
    );
}
export default MindMapGame;