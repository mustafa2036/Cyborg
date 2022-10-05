import Axios from 'axios';
import React, { useEffect  , useState} from 'react'
import { useParams } from 'react-router-dom'


export default function UnderDetails() {
    const params = useParams();
    const [getApi, setGetApi] = useState(null);

    async function getId(id) {
        let {data} = await Axios.get(`https://api.rawg.io/api/games/${id}`);
        setGetApi(data);
    }
    
    useEffect( () => {
        getId(params.id);
    } , [params.id]);
  return (
    <>
    <section className='underdetails text-white'>
        {params.id}
        <div className="container">
            {getApi?
            <div className='row'>
                <div className="col-lg-4">
                    <div>
                        <img src={getApi.images} alt="" />
                        <h3>{getApi.name}</h3>
                    </div>
                </div>
            </div>: <div></div>
        }
        </div>
    </section>
    </>
  )
}
