import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate=useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate("/")},3000)
  },[])

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. Sarvesh</p>
      <h2>You will be redirected to the Home page shortly</h2>
      
    </div>
  );
}