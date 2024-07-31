import { useState, useEffect } from "react"
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth"
import {logIn, logOut} from "./Store/AuthSlice"
import { Footer, Header } from "./Components"



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect( () => {
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(logIn({userData}))
      }
      else{
        dispatch(logOut())
      }
    })
    .finally( () => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        {/* <main>
          <Outlet />
        </main> */}
        <Footer />
      </div>
    </div>
  ) : (
    null
  )
}

export default App
