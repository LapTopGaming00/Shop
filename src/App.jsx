// packages
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
  // export default class App extends Component {
  //   render() {
  //     return (
  //       <div>
  //         App
  //         <h1>Lorem ipsum dolor sit amet.</h1>

  //         <h2>yana test</h2>
  // <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aperiam commodi asperiores excepturi, facilis veniam consequatur corporis earum illo tempore.</h3>

  //     <h4>siuuuuuu</h4>
  //       </div>

  //     );
  //   }
}

export default App;
