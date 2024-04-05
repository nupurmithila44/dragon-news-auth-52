import { FaGoogle } from "react-icons/fa6";
import { FaGithub, FaFacebookF,FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'


const RightSide = () => {
    return (
        <div>
            <div className="p-3 space-y-3 mb-6">
            <h2>login with</h2>
            <button className="btn  btn-outline w-full">
               <FaGoogle></FaGoogle>
                login with Google
            </button>
            <button className="btn  btn-outline w-full">
              <FaGithub></FaGithub>
                login with GitHub
            </button>
        </div>
        <div className="p-3 space-y-3 mb-6">
            <h2>find us on</h2>
           <a className="flex gap-4 p-4 rounded-lg rounded-t-lg border" href="">
          <FaFacebookF></FaFacebookF>
          <span>facebook</span>
           </a>
           <a className="flex gap-4 p-4 rounded-lg rounded-t-lg border" href="">
          <CiTwitter></CiTwitter>
          <span>Twitter</span>
           </a>
           <a className="flex gap-4 p-4 rounded-lg rounded-t-lg border" href="">
          <FaInstagram></FaInstagram>
          <span>instragram</span>
           </a>
        </div>
        <div className="p-3 space-y-3">
            <h2>Q Zone</h2>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
          
        </div>
        </div>

        
    );
};

export default RightSide;