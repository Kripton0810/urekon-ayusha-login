import urekonlogo from './images/urekon_logo.svg';
import uemlogo from './images/UEM Logo (White).png';
import urekontxt from './images/ureckon text logo.png';
import form_back from './images/form field.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="back">
      <div className="header">
        <img src={uemlogo} alt="uem logo"/>
        <img src={urekontxt} alt="uem logo"/>
        <img src={urekonlogo} alt="urekon logo"/>
      </div>
      <div className="form-list">
        <div className="field">
          <label>
            Email id
          </label>
          <div className="input-field">
              <img src={form_back} className="back-image"/>
              <input type="email" className="input-form-border"/>

          </div>
          
        </div>
        <div className="field">
          <label>
            Passcode
          </label>
          <div className="input-field">
              <img src={form_back} className="back-image"/>
              <input type="password" className="input-form-border"/>

          </div>
          
        </div>
        
      </div>
    </div>
    </>
  );
}

export default App;
