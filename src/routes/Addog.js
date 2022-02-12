import './App.css';
import NavBar from "../components/NavBar";
import VideoCard from "../components/VideoCard";

function Addog() {
  return (
    <>
      <NavBar/>
      <div id="addog">
        <VideoCard/>
      </div>
    </>
  );
}

export default Addog;
