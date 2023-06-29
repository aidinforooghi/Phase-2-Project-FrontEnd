import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Show = () => {
    const [itemData, setItemData] = useState()
    const { id } = useParams();

    function getItem() {
        fetch(`http://localhost:3001/toys/${id}`)
            .then(res => res.json())
            .then(data => setItemData(data))
            .catch(error => alert(error)) // show alert incase of an error
    }
    useEffect(() => {
        getItem()

    }, [id])
    return (
        <div>
            {itemData.name}
        </div>
    )
}

export default Show
