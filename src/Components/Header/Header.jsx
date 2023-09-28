 import './Header.css'
 const starWarsLogo = require('../Environment/Images/StarWarsText.png')

 const favoriteCount = 0;

const Header = () => {
    return (
        <div className='header'>
            <img src={starWarsLogo} alt="Star Wars" />
            <div className='header-favorites'>
                <h2>Favorites</h2>
                <p>{favoriteCount}</p>
                <>V</>
            </div>
        </div>
    )
}

export default Header;