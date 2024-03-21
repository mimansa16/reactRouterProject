import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfo } from './components/Github/Github.jsx'

// now since we want header and footer components along with all the links like home,about,etc, we can either call them in 
//all of them seperately but that is not the optimized way. So the optimized way is by making an another file called
// Layout.jsx or Route.jsx and dynamically pass the components like home, about, etc in between the header and footer components.

//METHOD 1 TO MAKE router
// const router = createBrowserRouter([//ye createBrowserRouter ke andar we give array of objects . those objects contain 
// //the path and element to be rendered along with some additional info like children, etc
//    {
//       path: '/', //path ke andar jo bhi hoga uske url me hone pe element ke andar ka component render ho jayega.
//       element: <Layout />,
//       children: [ //since yaha we have layout ke children(i.e. home, about, contact us, etc)
//         {
//           path: "", //this means /
//           element: <Home />
//         },
//         {
//           path: "about", //this means /about
//           element: <About />
//         },
//         {
//           path: "contact", //this means /contact
//           element: <Contact />
//         }
//       ]

//    }

// ])

//METHOD 2 TO MAKE router
const router = createBrowserRouter(
  createRoutesFromElements( // har route ke andar nesting is possible as done in the layout one
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} /> 
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} /> 
      <Route // loader --> agr hume apne page me kisi bhi functionality ke liye koi data fetch karna hai from an api or a database 
      //to we can directly make the api calls from the loader! -->
      //to yaha hota aisa hai ki jaise for github comp hum ek api call kar rhe hain to wen the user is on our page and usne ek baar
      //bhi github ki link pe hover kiya to the loader becomes active and us hi time api calls start taking place and data fetching starts
      loader={githubInfo} // the data or response from this loader is accessed by the github comp through a hook --> "useLoaderData"
      path='github' 
      element={<Github />}
      /> 
    </Route>
    //is user ke andar user/:userId me : ke baad jo bhi parameter humne le rakga hai is parameter ka direct access 
    //we get in the User component which can be accessed by the User comp with the help of "useParams" method!
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
