import Game from "../components/games/Game";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import Layout from "../components/Layout/Layout";
export const Games = () => {
    return (
        <Layout>
            <Game img={img2} link="https://jenijivkova.itch.io/animalsoundgame"/>
            <Game img={img3} link="https://jenijivkova.itch.io/storygame"/>
            <Game img={img4} link="https://jenijivkova.itch.io/mindmapg"/>
        </Layout>
    )
}