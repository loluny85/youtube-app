import { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router';
import AppContext from '../store/appContext';
import YouTube from 'react-youtube';

const Video = () => {
  const { state, dispatch } = useContext(AppContext)
  const [player, setPlayer] = useState(null)
  const [videoAvailable, setVideoAvailable] = useState(true)
  const [videoTitle, setVideoTitle] = useState("")
  const { videoUrl, playerState } = state;
  const videoUrlId = videoUrl ?.split("v=")[1]?.split("&")[0]
  const Router = useRouter()
  const playerRef = useRef(null)

  useEffect(() => {
    !videoUrl && Router.push('/')
  }, [])

  const opts = {
    height: '490',
    width: '840',
    playerVars: {
      autoplay: 1
    },
  };

  const navigate = (path) => {
    const currentPlayerTimeStamp = player.getCurrentTime()
    dispatch({
      type: "SAVE_TIMESTAMP",
      payload: {
        navigateOutVideoPageTimeStamp: new Date(),
        navigateOutVideoPagePlayerTimeStamp: currentPlayerTimeStamp
      }
    })
    Router.push(path)
  }

  const onReadyHandler = (e) => {
    const player = e.target;
    setVideoTitle(player.getVideoData().title)
    if (player.getDuration() > 0) {
      setVideoAvailable(true)
      setPlayer(player)
      if (state.navigateOutVideoPageTimeStamp && playerState === "PLAYING") { // Autoplay video from the time elapsed timestamp logic
        const navigateInVideoPageTimeStamp = new Date();
        const awayFromVideoPageTime = (navigateInVideoPageTimeStamp - state.navigateOutVideoPageTimeStamp) / 1000
        const seekToTimeStamp = state.navigateOutVideoPagePlayerTimeStamp + awayFromVideoPageTime
        player.seekTo(seekToTimeStamp)
      }
      else { // Autoplay PAUSED video from the timestamp when it was paused
        player.seekTo(state.navigateOutVideoPagePlayerTimeStamp)
      }
    }
    else { // If video is unavailable!
      setVideoAvailable(false)
    }
  }

  const onStateChangeHandler = (e) => {
    dispatch({
      type: "PLAYER_STATE",
      payload: e.target.getPlayerState() === 1 ? "PLAYING" : "PAUSED"
    })
  }

  return (
    <div className="flex-column align-center">
      <h2>{videoTitle}</h2>
      <YouTube 
        ref={playerRef} 
        videoId={videoUrlId} 
        opts={opts} 
        onReady={onReadyHandler} 
        onStateChange={onStateChangeHandler}
      />
      <div className={`errorMsg ${!videoAvailable ? 'displayError' : 'hideError'}`}>Video Not Available</div>
      <div className="space-around">
        <input type="button" value="Edit" className="button primaryButton" onClick={()=>navigate("/")}/>
        <div style={{width: '24px'}}></div>
        <input type="button" value="Check Giffy!" className="button secondaryButton" onClick={()=>navigate("/giffy")}/>
      </div>
    </div>
  )
};

export default Video;