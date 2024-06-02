import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RouteProtection(props) {
    let Cmp = props.cmp;
    const navigate = useNavigate();
    useEffect(()=>{
        if (!localStorage.getItem('userInfo')){
            navigate('/login');
        }
    },[])
    return (
        <>
            <Cmp/>
        </>
    )
}
