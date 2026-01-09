import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import MovieHome from "./pages/MovieHome"
import MoviePopular from "./pages/MoviePopular"
import MovieTop from "./pages/MovieTop"
import MovieUpcoming from "./pages/MovieUpcoming"
import MovieTrending from "./pages/MovieTrending"
import Search from "./pages/Search"
import NotFound from "./pages/NotFound"

const App = () => {
  return(
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MovieHome />} />
        <Route path="/popular" element={<MoviePopular />} />
        <Route path="/toprated" element={<MovieTop />} />
        <Route path="/upcoming" element={<MovieUpcoming />} />
        <Route path="/trending" element={<MovieTrending />} />
        <Route path="/search" element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App