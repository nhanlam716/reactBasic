import './App.css'
import { FncQuestion1 } from './components/FncComponent1';
import { FncComponent2 } from './components/FncComponent2';
import { FncComponent3A, FncComponent3B, FncComponent3C, FncComponent3D } from './components/FncComponent3';
import { FncComponent4Artilce, FncComponent4Aside, FncComponent4Footer, FncComponent4Header, FncComponent4Nav, FncComponent4Section } from './components/FncComponent4';
import { FncComponent5 } from './components/FncComponent5';
import { FncComponent6Information, FncComponent6Product, FncComponent6Table } from './components/FncComponent6';

import { Question1 } from "./components/Question1";
import { Question2 } from "./components/Question2";

function App() {
  return (
    <div>
      <Question1/>
      <Question2/>
      <div className='user'>
        <FncQuestion1 />
        <FncQuestion1 />
        <FncQuestion1 />
      </div>
      <div>
        <FncComponent2 />
      </div>
      <div>
        <FncComponent3A />
        <div className='layout1'>
          <FncComponent3B />
          <FncComponent3C />
        </div>
        <FncComponent3D />
      </div>
      <div className='layout'>
        <FncComponent4Header />
        <FncComponent4Nav />
        <div className='layout2'>
          <div className='layout-content'>
            <FncComponent4Section />
            <FncComponent4Artilce />
          </div>
          <FncComponent4Aside />
        </div>
        <FncComponent4Footer />
      </div>
      <div className='table'>
        <FncComponent5 />
      </div>
      <div>
        <FncComponent6Information />
        <FncComponent6Product />
        <FncComponent6Table />
      </div>
    </div>
  );
};

export default App;
