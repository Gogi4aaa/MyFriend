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
            <div className="mt-5" style={{ width: "60%", height: "100%"}}>
                <h4 className="p-3" style={{fontFamily: "cursive",background: "rgba(255, 255, 255, 0.6)" , border: "3px solid rgba(255, 255, 255, 0.6)", borderRadius: "15px"}}>
                    Инструкции за игра „Кой как звучи?“ <br/>
                    Слушай внимателно – Ще чуеш звук от животно.<br/>

                    Гледай екрана – Появяват се три картинки на животни.<br/>

                    Избери правилното животно – Натисни картинката на животното, което <br/> издава звука.

                    Ако познаеш правилно – Получаваш 2 точки и виждаш <br/> поздравителен надпис.

                    Продължи играта – Натисни бутона, за да <br/> чуеш нов  звук и да видиш нови животни.

                    Спечели играта – Събери 20 <br/> точки, за да видиш екрана на победителя.

                    Играй отново, когато пожелаеш.
                </h4>
            </div>
        </Layout>
    );
}