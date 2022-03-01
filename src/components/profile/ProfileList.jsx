import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function ProfileList() {
    const [query] = useSearchParams()
    useEffect(() => {
        console.log(query.get("name"));
    }, [query]);
    return ( 
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
     );
}

export default ProfileList;