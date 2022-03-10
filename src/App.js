import "./App.css";
import CovidMap from "./component/CovidMap";
import {RecoilRoot} from 'recoil'
import Area from './component/Area'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Area />
        <CovidMap />
      </div>
    </RecoilRoot>
  );
}

export default App;
