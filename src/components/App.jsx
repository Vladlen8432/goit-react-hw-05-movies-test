import React, { lazy } from 'react';
import css from './StylesApp.module.css';
import { NavLink, Routes, Route } from 'react-router-dom';

// import Home from './Home/Home';
// import Movies from './Movies/Movies';
// import MovieDetails from './MovieDetails/MovieDetails';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <div>
      <header className={css.headerContainer}>
        <NavLink className={css.headerNav} to="/">
          Home
        </NavLink>
        <NavLink className={css.headerNav} to="/movies">
          Movies
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;

// const App = () => {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/movies/:movieId" element={<MovieDetails />} />
//           <Route path="/movies/:movieId/cast" element={<Cast />} />
//           <Route path="/movies/:movieId/reviews" element={<Reviews />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };
