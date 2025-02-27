import React from "react";
import Layout from "../src/components/Layout/Layout"; 
import "./App.css"; 

const App: React.FC = () => {
  return (
    <Layout>
      <div className="canvas">
        <h1>Добре дошли!</h1>
        <div className="autism-info">
          <h2>Добре дошли в нашия свят на игри и развитие!</h2>
          <p>
            Този уебсайт е създаден с любов и грижа за деца с аутизъм. Тук ще
            намерите забавни и образователни игри, които помагат на децата да
            развият важни умения като комуникация, концентрация и социално
            взаимодействие.
          </p>

          <h2>Какво е аутизъм?</h2>
          <p>
            Аутизмът е невроразвитийно състояние, което засяга начина, по който
            човек възприема света, обработва информация и общува с другите.
          </p>

          <h3>Основни предизвикателства при аутизма:</h3>
          <ul>
            <li><strong>Комуникация</strong> - Различни начини на изразяване.</li>
            <li><strong>Социално взаимодействие</strong> - Трудности със социалните норми.</li>
            <li><strong>Повтарящи се поведения</strong> - Навици и ритуали.</li>
            <li><strong>Сензорна чувствителност</strong> - Възприемане на звуци, текстури и миризми.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default App;
