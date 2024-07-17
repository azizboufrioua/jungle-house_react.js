import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {

    const title  = 'Jungle House'

    return (
        <div className='jh-banner'>
            <img src={logo} className='jh-logo' alt='jungle house logo'/>
            <h1 className='jh-title'>{title}</h1>

        </div>
    )

   // return <div className='jh-banner'><h1>Jungle House</h1></div>

}



export default Banner
