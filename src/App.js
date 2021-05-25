import './App.css';
import KeyIdeas from './KeyIdeas'
import LifeCycle from './LifeCycle'

function App() {
  return (
    <div className="App">
      <div className="BoxContainer">
        {/* <div className="LeftBox"></div> */}
        <KeyIdeas/>
        <div className="MiddleBox">
          <text className="FancyTitle">Lauras Wonderful Fantastic Super Amazing React Knowledge Share</text> 
        </div>
        {/* <div className="RightBox"></div> */}
        <LifeCycle/>
      </div>
      <div className="BoxContainer">
        <KeyIdeas title={'One'}/>
        <KeyIdeas title={'Two'}/>
        <KeyIdeas title={'Three'}/>
      </div>
    </div>
  );
}

export default App;
