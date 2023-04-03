import Home from "../pages/Home"
import ReviewTrending from "../pages/Review/ReviewTrending"
import SearchResults from "../pages/SearchResults"
import People from "../pages/People"
import Movie from "../pages/Movie"
import Tv from "../pages/Tv"
import NotFound from "../pages/404NotFound"
export const publicRouter = [
    { path: "", component: <Home /> },
    { path: "/search", component: <SearchResults /> },
    // { path: "/movie/:id-:title", component: <ReviewTrending /> }
    { path: "/movie/:id", component: <ReviewTrending /> },
    { path: "/tv/:id", component: <ReviewTrending /> },
    { path: "/people", component: <People /> },
    { path: "/movie", component: <Movie /> },
    { path: "/tv", component: <Tv /> },
    { path: "*", component: <NotFound /> }
]