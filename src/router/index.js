import Home from "../pages/Home"
import ReviewTrending from "../pages/Review/ReviewTrending"
import SearchResults from "../pages/SearchResults"
export const publicRouter = [
    { path: "", component: <Home /> },
    { path: "/search", component: <SearchResults /> },
    // { path: "/movie/:id-:title", component: <ReviewTrending /> }
    { path: "/movie/:id", component: <ReviewTrending /> },
    { path: "/tv/:id", component: <ReviewTrending /> }
]