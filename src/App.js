
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import About from './components/about'
import Instructions from './components/instructions';
import ImportantDates from './components/importantdates';
import FeeStructure from './components/feestructure';
import ExamInstructions from './components/examinstructions';
import Scholarship  from './components/Scholarship';
import Subscholarshipsection from './components/subscholarship';

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
      <section className='ExamInstructions'>
        <ExamInstructions/>
      </section>
      <section className='green-bg Scholarship'>
        <Scholarship/>
      </section>
      <section>
        <Subscholarshipsection/>
      </section>
    </div>
  );
}

export default App;
