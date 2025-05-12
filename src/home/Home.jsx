import './home.css'
import Wheel from './Wheel'

const Home = () => {

  return (
    <div className='home-wrapper'>
      <div className='firt-part-wrapper'>
        <div className='home-conent-left'>
          <div className='heading'>Dobrodošli u salon Brankica</div>
          <div className='sub-heading'>Vaša oaza mira, nege i lepote.</div>
      </div>
      
      <div className='home-content-right'>
        <div className='home-background-image'>
        
      </div>
      </div>
      </div>

      <div className='sec-part-wrapper'>
        <div className='sec-part-text'>
          U srcu grada, salon Brankica spaja stručnost i nežnost kako bi svaka poseta postala vaš mali ritual.
          Posvećeni smo tome da se osećate negovano, opušteno i samouvereno jer prava lepota počinje iznutra.
        </div>
      </div>

      <div className='third-part-wrapper'>
        <div className='wheel'>
          <Wheel></Wheel>
        </div>
      </div>
    </div>
  )
}

export default Home