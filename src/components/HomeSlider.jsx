import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {collection,getDoc,query,orderBy,limit} from '/firebase/firestore'
import {db} from '../firebase.config'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Spinner from './Spinner'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function HomeSlider() {
const [loading, setLoading] = useState(true)
const [listing, setListing] = useState(null)

const navigate = useNavigate()

useEffect(() => {
  const listingsRef = collection(db,'listings')
  const q = query(listingsRef,orderBy('timestamp','desc'),limit(5))
  const querySnap = await getDocs(q)
 
  let listings = []
  querySnap.forEach
  
}, [])


  return (
    <div>
      Home slider
    </div>
  )
}

export default HomeSlider
