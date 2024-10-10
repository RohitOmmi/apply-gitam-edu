
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import About from './components/about'
import Instructions from './components/instructions';
import ImportantDates from './components/importantdates';
import FeeStructure from './components/feestructure';

function App() {
  return (
    <div className="App">
      <header>
        <AppHeader/>
      </header>
      <section>
        <About/>
      </section>
      <section className='fee-instructions'>
        <Instructions/>
      </section>
      <section className='importantdatesection'>
        <ImportantDates/>
      </section>
      <section className='feestructuresection'>
        <FeeStructure/>
      </section>
    </div>
  );
}

export default App;
