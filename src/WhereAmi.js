import { useLocation } from 'react-router-dom';
import axios from 'axios'
import {useState,useEffect} from 'react'

const WhereAmi = () => {
    const currentUrl = window.location.href;
    const location = useLocation();
    const [ip, setIP] = useState('');
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4)
    }

    useEffect( () => {
        //passing getData method to the lifecycle method
        getData()
    
      }, [])
    return (
        <>
        <div>{location.pathname}</div>
        <div>{ip}</div>
        <div>{currentUrl}</div>
        </>
    );
}

export default WhereAmi;