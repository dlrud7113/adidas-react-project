/* components */
import Header from './components/Header';
import Footer from './components/Footer';
import MainVisual from './components/MainVisual'; // 수정: Footer가 아닌 MainVisual로 import
import Section01 from './components/Section01';
import Section02 from './components/Section02';
import Section03 from './components/Section03';
import Section04 from './components/Section04';
import Section05 from './components/Section05';

/* styles */
import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/MainVisual.css'
import './styles/Section01.css';
import './styles/Section02.css';
import './styles/Section03.css';
import './styles/Section04.css';
import './styles/Section05.css';
import './styles/reset.css';

/* Routes */
import { Routes, Route } from "react-router-dom"
import All from "./pages/All"
import Detail from "./pages/Detail"

function App() {
  return (
    <div className="App">
      <Header/>
      <MainVisual/>
      <Section01
      product1="KEEP ON MOVING "
      product2="KEEP RUNNING "
      product3="adidas Z.N.E. 빠져드는 그 순간 "
      product4="FEEL YOUR STRENGTH"
      />
      <Section02
      shoes1="GAZELLE"
      shoes2="가젤"
      shoes3="캠퍼스 00s"
      shoes5="퍼피렛 "
      shoes6="슈퍼스타82"
      shoes7="삼바클래식"
      clothing1="아디컬러 퍼퍼 재킷"
      clothing2="모노그램 베스트"
      clothing3 ="다운자켓"
      />
      <Section03/>
      <Section04/>
      <Section05/>
      <Footer/>
    </div>
  );
}

export default App;
