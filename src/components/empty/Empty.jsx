import searchingMan from '../../img/searching-man.svg';
import './Empty.scss';

export const Empty = () => {
    return (
        <div className='wrapper-empty'>
            <img src={searchingMan} alt="not-found"/>
            <p>Oops, there’s nothing here yet!</p>
        </div>
    )
}