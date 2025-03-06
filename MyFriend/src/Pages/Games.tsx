import Game from "../components/games/Game";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import Layout from "../components/Layout/Layout";
export const Games = () => {
    return (
        <Layout>
            <Game img={img3} link="/storygame"/>
            <Game img={img2} link="/animalsoundgame"/>
            <Game img={img4} link="/mindmapgame"/>
        </Layout>
    )
}