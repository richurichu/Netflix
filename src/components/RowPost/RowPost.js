import React , {useEffect,useState}from 'react'
import './RowPost.css'
import Draggable from 'react-draggable';
import Youtube from 'react-youtube'
import { API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, seturlId] = useState('')
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovies(response.data.results);
    })
   
  }, [])
  const opts={
    height:'390',
    width:'700',
    playerVars:{
      autoplay:1,
    },
  };
  const handleMovie = (id)=>{
    
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
        setShowModal(true);
        

      }
      else{
        alert('video not available ')
      }
    

    })

  }
  const closeModal = () => {
    setShowModal(false);
    seturlId(''); 
  }

  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
             <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='films'/>
          )}
        </div>
          {showModal && 
           <Draggable>
            <div className="modal">
          <button onClick={closeModal} className="closeModal">Close</button>
          {urlId && <Youtube   key={urlId} opts={opts} videoId={urlId.key}/> }
         </div>
         </Draggable>
        }  
        
        
    </div>
          
  )
          
      }
export default RowPost