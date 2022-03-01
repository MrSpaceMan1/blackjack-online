import { useParams } from 'react-router-dom';

function ProfilePage() {
    const { id } = useParams();

    return ( 
        <div>
            <img src='https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png'/>
            <h1>Nazwa gracza</h1>
            <h2>Ilość wygranych</h2>
        </div>
     );
}

export default ProfilePage;