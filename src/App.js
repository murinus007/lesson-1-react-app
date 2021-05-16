import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='block about'>
        <div>
          <div className='flex'>
            <div className='title-line'></div>
            <h2 className='about__title title'>About</h2>
            <div className='title-line'></div>
          </div>
          <div className='about__description description'>loremasdfgdsghsdghsdghsdkghskdjghskdghskdghksdghks
          sddasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dhgsdahg;ksadhgsdhgksdhgklsdhgsdhgksdhg;sadhgs;adgh;sadhgs;aldgh;saldhgs;ladhgsdhg</div>
        </div>
        <div className='flex'>
          <div className='about__item item'>
            <img src='favicon.ico' alt='logo' className='item__img img'></img>
            <h3 className='about__item-name item-name'>BU</h3>
            <div className='about__item-text item-text'>asfasfasfasfasfasfasfasfasfafa</div>
            <button className='item__btn'>ok</button>
          </div>
          <div className='about__item item'>
            <img src='favicon.ico' alt='logo' className='__img img'></img>
            <h3 className='about__item-name item-name'>MU</h3>
            <div className='about__item-text item-text'>opopopopopopopopopopopopopopo</div>
            <button className='item__btn cancel-btn'>cancel</button>
          </div>
          <div className='about__item item'>
            <img src='favicon.ico' alt='logo' className='about__img img'></img>
            <h3 className='about__item-name item-name'>KU</h3>
            <div className='about__item-text item-text'>bdbdbdbdbdbdbdbdbdbdbdbdbdbdb</div>
            <button className='item__btn'>ok</button>
          </div>
        </div>
      </div>
      <div className='block contacts'>
        <div>
          <div className='flex'>
            <div className='title-line'></div>
            <h2 className='contacts__title title'>Contacts</h2>
            <div className='title-line'></div>
          </div>
          <div className='contacts__description description'>loremasdfgdsghsdghsdghsdkghskdjghskdghskdghksdghks
          sddasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dhgsdahg;ksadhgsdhgksdhgklsdhgsdhgksdhg;sadhgs;adgh;sadhgs;aldgh;saldhgs;ladhgsdhg</div>
        </div>
        <div className='flex'>
          <div className='contacts__item item'>
            <img src='favicon.ico' alt='logo' className='item__img img'></img>
            <h3 className='contacts__item-name item-name'>BU</h3>
            <div className='contacts__item-text item-text'>asfasfasfasfasfasfasfasfasfafa</div>
            <button className='item__btn cancel-btn'>cancel</button>
          </div>
          <div className='contacts__item item'>
            <img src='favicon.ico' alt='logo' className='__img img'></img>
            <h3 className='contacts__item-name item-name'>MU</h3>
            <div className='contacts__item-text item-text'>opopopopopopopopopopopopopopo</div>
            <button className='item__btn'>ok</button>
          </div>
          <div className='contacts__item item'>
            <img src='favicon.ico' alt='logo' className='contacts__img img'></img>
            <h3 className='contacts__item-name item-name'>KU</h3>
            <div className='contacts__item-text item-text'>bdbdbdbdbdbdbdbdbdbdbdbdbdbdb</div>
            <button className='item__btn cancel-btn'>cancel</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
