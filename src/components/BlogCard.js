import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Link className="blog-card group overflow-hidden">
      <div className="card-image overflow-hidden">
        <img
          src="images/blog-1.jpg"
          className="img-fluid w-100 group-hover:scale-110  transition-all duration-300 "
          alt="blog"
        />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat
          accusamus officia
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </Link>
  );
};

export default BlogCard;
