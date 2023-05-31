import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './pages/MainContainer'
import WatchPage from './pages/WatchPage'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <div className='flex flex-col'>
        <Head />
        <RouterProvider router={appRouter} />
        {/*
          Head
          MainContainer
            Sidebar
              Menuitems
            Body
              ButtonsList
              VideoContainer
                VideoCard
      */}
      </div>
    </Provider>
  )
}

export default App
