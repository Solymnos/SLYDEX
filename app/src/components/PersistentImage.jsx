import { useLocation } from 'react-router-dom';

const PersistentImage = ()  =>
{
    const location = useLocation();
    const visibleRoutes = [ "/" , "/login" , "/register" ];
    
    if (!visibleRoutes.includes(location.pathname))
    {
        return null;
    } else {
        return (
            <img className='fixed bottom-0 left-0 w-full h-2/5 z-10' src='/img/HBG.png'/>
        )
    }
}

export default PersistentImage;