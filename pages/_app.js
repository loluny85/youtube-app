import BaseLayout from "../components/layouts/BaseLayout"
import '../styles/globals.css'
import AppContext from "../store/AppContext"
import { useReducer } from 'react';
import AppReducer from "../store/appReducer"
import initialState from "../store/initialState"

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </AppContext.Provider>
  )
}

export default MyApp
