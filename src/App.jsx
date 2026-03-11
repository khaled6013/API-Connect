import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CardList />,
  },
  {
    path: "/details/:id",
    element: <CardDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;