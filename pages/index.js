import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { VALID_YOUTUBE_URL } from '../util/regex';
import AppContext from '../store/appContext'
import styles from '../styles/Home.module.css'

const Home = () => {
  const { state, dispatch } = useContext(AppContext)
  const { videoUrl } = state
  const { inputBox, disableButtonStyle } = styles;
  const [url, setUrl] = useState(videoUrl)
  const [invalidUrl, setInvalidUrl] = useState("")
  const [invalidUrlMsg, setInvalidUrlMsg] = useState("")
  const router = useRouter()

  useEffect(() => {
    if (!url.match(VALID_YOUTUBE_URL)) {
      setInvalidUrl(true)
      setInvalidUrlMsg("Enter a valid URL")
    }
    else {
      setInvalidUrl(false)
      setInvalidUrlMsg("")
    }
  }, [url])

  const navigateToVideo = (e) => {
    e.preventDefault()
    if (state ?.videoUrl !== url) {
      dispatch({
        type: 'SAVE_VIDEO_URL',
        payload: url
      })
      dispatch({
        type: 'DELETE_TIMESTAMP'
      })
    }
    router.push('video')
  }

  const clickHandler = (e) => {
    e.target.select()
  }

  return (
    <form className="flex-column align-center">
      <input
        className={inputBox}
        type="text"
        placeholder="Youtube video URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onClick={clickHandler}
      />
      <div className={`errorMsg ${url && invalidUrl ? 'displayError' : 'hideError'}`}>{invalidUrlMsg}</div>
      <input
        className={`button primaryButton ${invalidUrl ? disableButtonStyle : ''}`}
        type="submit"
        value="Save"
        disabled={invalidUrl}
        onClick={navigateToVideo}
      />
    </form>
  );
};

export default Home;