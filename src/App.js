import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

//styling
import "./bootstrap.min.css";

//components
import ToursList from "./tours/ToursList";
import UserList from "./git-users-list/UsersList";
import Reviews from "./reviews/Reviews";
import QuestionsList from "./accordian/QuestionsList";
import Menu from "./menu/Menu";
import ReviewsAnime from "./reviews-animation/ReviewsAnime";
import ColorList from "./color-generator/ColorsList";
import TodoList from "./todo-list/ItemsList";
import Navbar from "./navbar/Navbar";
import SidebarModal from "./sidebar-modal";
import Landingpage from "./landing";
import BuyCart from "./cart";
import Pagination from "./pagination/Pagination";
import Quiz from "./quiz";

const App = () => {
  //
  return (
    <HashRouter basename="/">
      <Route path="/" exact component={ProjectsMenu} />
      <Route path="/ToursList" exact component={ToursList} />
      <Route path="/UserList" exact component={UserList} />
      <Route path="/Reviews" exact component={Reviews} />
      <Route path="/QuestionsList" exact component={QuestionsList} />
      <Route path="/Menu" exact component={Menu} />
      <Route path="/ReviewsAnime" exact component={ReviewsAnime} />
      <Route path="/ColorList" exact component={ColorList} />
      <Route path="/TodoList" exact component={TodoList} />
      <Route path="/Navbar" exact component={Navbar} />
      <Route path="/SidebarModal" exact component={SidebarModal} />
      <Route path="/Landingpage" exact component={Landingpage} />
      <Route path="/BuyCart" exact component={BuyCart} />
      <Route path="/Pagination" exact component={Pagination} />
      <Route path="/Quiz" exact component={Quiz} />
    </HashRouter>
  );
};
export default App;

//homepage
const ProjectsMenu = () => {
  return (
    <div className="container py-5">
      <h4>Select a project:</h4>
      <ol>
        <li>
          <Link to="/Navbar" className="text-decoration-none" target="_blank">
            Component (Navbar)
          </Link>
        </li>
        <li>
          <Link
            to="/SidebarModal"
            className="text-decoration-none"
            target="_blank"
          >
            Component (Sidebar + Modal)
          </Link>
        </li>
        <li>
          <Link
            to="/ToursList"
            className="text-decoration-none"
            target="_blank"
          >
            List (Tours)
          </Link>
        </li>
        <li>
          <Link to="/UserList" className="text-decoration-none" target="_blank">
            List (Github Users)
          </Link>
        </li>
        <li>
          <Link to="/Reviews" className="text-decoration-none" target="_blank">
            Carousel (Reviews)
          </Link>
        </li>
        <li>
          <Link
            to="/ReviewsAnime"
            className="text-decoration-none"
            target="_blank"
          >
            Animated Carousel (Reviews)
          </Link>
        </li>
        <li>
          <Link
            to="/QuestionsList"
            className="text-decoration-none"
            target="_blank"
          >
            Accordion (Questions)
          </Link>
        </li>
        <hr className="w-25 my-2" />
        <li>
          <Link to="/Menu" className="text-decoration-none" target="_blank">
            Restaurant Menu
          </Link>
        </li>
        <li>
          <Link
            to="/Landingpage"
            className="text-decoration-none"
            target="_blank"
          >
            Landing Page
          </Link>
        </li>
        <li>
          <Link
            to="/Pagination"
            className="text-decoration-none"
            target="_blank"
          >
            Client Side Pagination
          </Link>
        </li>
        <li>
          <Link to="/BuyCart" className="text-decoration-none" target="_blank">
            Buy Cart
          </Link>
        </li>
        <li>
          <Link
            to="/ColorList"
            className="text-decoration-none"
            target="_blank"
          >
            Color Generator
          </Link>
        </li>
        <li>
          <Link to="/TodoList" className="text-decoration-none" target="_blank">
            Todo App
          </Link>
        </li>
        <li>
          <Link to="/Quiz" className="text-decoration-none" target="_blank">
            Quiz App
          </Link>
        </li>
      </ol>
    </div>
  );
};
