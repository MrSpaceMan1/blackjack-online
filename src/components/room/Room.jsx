import { useParams } from 'react-router-dom';

function Room({}) {
    const { id } = useParams()
    return (
    <div>
        Id pokoju: {id}
        {/* Room options */}
        <div>
            <button>Zmień nazwę</button>
            <button>Opuść pokój</button>
        </div>
    </div>
    );
}

export default Room;