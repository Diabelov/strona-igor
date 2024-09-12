import '../css/piosenka.css'
import hellsembracephoto from "../photos/hellsembrace.png"
import { SlSocialSpotify } from "react-icons/sl";
import { SiApplemusic } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SlSocialSoundcloud } from "react-icons/sl";
import { SiAmazonmusic } from "react-icons/si";
import { SiTidal } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";

function Hell() {
    return (
        <div className='Div'>

            <div className='Div'>
                <div className='Div'>
                    <img src={hellsembracephoto} alt='hellpng' className='Img'/>
                </div>
                <button className="music-button spotify-button"><SlSocialSpotify style={{ marginRight: '5px'}} />Spotify </button>
                <button className="music-button apple-music-button"> <SiApplemusic style={{ marginRight: '5px'}}/> Apple Music </button>
                <button className="music-button youtube-button"> <SiYoutube style={{ marginRight: '5px'}}/> Youtube </button>
                <button className="music-button soundcloud-button"> <SlSocialSoundcloud style={{ marginRight: '5px'}}/> Soundcloud </button>
                <button className="music-button  amazon-music-button"> <SiAmazonmusic style={{ marginRight: '5px'}}/> Amazon Music </button>
                <button className="music-button  tidal-button"> <SiTidal style={{ marginRight: '5px'}}/> Tidal </button>
                <button className="music-button  youtube-music-button"> <SiYoutubemusic style={{ marginRight: '5px'}}/> Youtube Music </button>
            </div>
        </div>
    )
}

export default Hell;