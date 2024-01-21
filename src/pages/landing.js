import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <div className="box">
        <div className="text-3xl font-bold mb-8 text-white brightness-100 text-center">
          Welcome to Bingehub
        </div>

        <button className="outlined" onClick={()=>{navigate("/home")}}>
          Enter your email
        </button>
      </div>
    </div>
  );
}
