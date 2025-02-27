import { Link } from "react-router-dom";
import "./Game.css";
import { GameProps } from "../../Interfaces/Login/Game";
const Game = ({link, img }: GameProps) => {
  return (
    <>
        <div className="imgBox">
        <img src={img} alt="Кой как звучи"/>
        <Link target="_blank" className="btn btn-primary" to={link}>
            Играй
        </Link>
        </div>
    </>
  )
}
export default Game;