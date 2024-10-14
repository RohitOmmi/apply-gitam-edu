
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
import Discipline from './components/discipline';
import Faqs from './components/faqs';
import Copyrights  from './components/footer';

function App() {
  return (
    <div className="App">
      <header style={{position:"sticky",top:"0px",backgroundColor:"#ffffff"}}>
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
      <section className='discipline'>
        <Discipline/>
      </section>
      <section className='faqs'>
        <Faqs/>
      </section>
      <footer>
        <Copyrights/>
      </footer>
    </div>
  );
}

export default App;
