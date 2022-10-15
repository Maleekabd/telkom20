import './App.css';

// import component
import Intro from './components/Intro';
import Trending from './components/trending';
import Anime from './components/Anime'
import BrandExample from './components/navbar';

//import styling
import "./style/bg/webBg.css"


function App() {
  return (
    <div>
      <header className='sticky-top'>
        <BrandExample />
      </header>
      <div className='myBG'>
        <Intro />
      </div>
      <article>
        <div className='trendingAnim'>
          <Trending />
        </div>
        <div className='Anime'>
          <Anime />
        </div>
      </article>
    </div >
  );
}

export default App;
