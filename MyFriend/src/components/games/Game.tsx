import { Link } from "react-router-dom";
import "./Game.css";
import { GameProps } from "../../Interfaces/Login/Game";
const Game = ({link, img }: GameProps) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
        <div className="imgBox">
        <img src={img} alt="Кой как звучи"/>
        <Link className="btn btn-primary" to={link}>
            Играй
        </Link>
        </div>
    </div>
  )
}
export default Game;