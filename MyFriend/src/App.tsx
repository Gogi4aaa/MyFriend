import React from "react";
import Layout from "../src/components/Layout/Layout"; 
import "./App.css"; 

const App: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl" style={{width: "60%"}}>
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Какво е аутизъм?</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Аутизмът е невроразвитийно разстройство, което засяга начина, по който човек възприема света, общува и взаимодейства с околните. Хората с аутизъм могат да имат затруднения в социалните умения, комуникацията и поведението, но също така притежават уникални способности и начини на мислене.
      </p>
      
      <h2 className="text-2xl font-semibold text-blue-500 mt-6">Ранни признаци на аутизъм</h2>
      <ul className="list-disc list-inside text-gray-700 text-lg mt-4 space-y-2" style={{listStyle:"none"}}>
        <li>Забавено или липсващо говорно развитие.</li>
        <li>Липса на зрителен контакт и социална усмивка.</li>
        <li>Повтарящи се движения като размахване на ръце или въртене.</li>
        <li>Силна чувствителност към определени звуци, текстури или миризми.</li>
        <li>Предпочитание към самостоятелни игри вместо взаимодействие с други деца.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-blue-500 mt-6">Основни предизвикателства</h2>
      <ul className="list-disc list-inside text-gray-700 text-lg mt-4 space-y-2" style={{listStyle:"none"}}>
        <li>Трудности при разпознаване на емоции и невербални сигнали.</li>
        <li>Проблеми с адаптацията към нови ситуации и промени в рутината.</li>
        <li>Предизвикателства при изграждането на приятелства и социални връзки.</li>
        <li>Прекалена фиксация върху определени теми или предмети.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold text-blue-500 mt-6">Нашата мисия</h2>
      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Проектът <strong>„Моето другарче“</strong> е създаден, за да предостави подкрепяща и интуитивна среда за обучение и развитие на деца с аутизъм. Чрез интерактивни игри и адаптирани задачи, платформата помага за подобряване на социалните и комуникативните умения, като същевременно насърчава самостоятелността и увереността.
      </p>
      
      <p className="text-xl font-bold text-center text-green-600 mt-6">
        Заедно можем да създадем по-достъпна и подкрепяща среда за всяко дете!
      </p>
    </div>
    </Layout>
  );
};

export default App;
