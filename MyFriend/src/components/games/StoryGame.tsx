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
            <Unity unityProvider={unityProvider}  style={{height: "500px", width: "60%"}}/>
        </div>
        <div className="mt-5" style={{ width: "60%", height: "100%"}}>
                <h4 className="p-3" style={{fontFamily: "cursive",background: "rgba(255, 255, 255, 0.6)" , border: "3px solid rgba(255, 255, 255, 0.6)", borderRadius: "15px"}}>
                    Инструкции за игра „Истории в картинки“ <br />
                    Гледай внимателно – На екрана има три картинки, които показват части от една история.

                    Подреди правилно – Използвай бутоните със стрелки наляво и надясно, за да разменяш местата на картинките.

                    <br /> Провери историята – Когато смяташ, че картинките са в правилния ред, изчакай проверката.

                    Ако си подредил правилно – Ще получиш точка и ще чуеш звук за верен отговор.

                    Продължи играта – След успешна подредба ще се появи нова история с три нови картинки.

                    <br />Спечели играта – Когато подредиш всички истории, ще видиш екран за победа.

                    Играй отново, когато пожелаеш.
                </h4>
            </div>
        </Layout>
    );
  };
export default StoryGame;