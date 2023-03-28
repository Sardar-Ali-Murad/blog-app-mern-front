import React from "react";
import "./Blogs.css";
import { blogsData } from "./data";
import img from "../assets/trending.png";
import calender from "../assets/calender.png";
import time from "../assets/time.png";

const Blogs = () => {
  return (
    <div className="blogsMain">
      {/*  */}
      <div>
        <div className="blogsPart1">
          {blogsData.slice(0, 3).map((item) => {
            return (
              <div className="singleBlog">
                <img src={item?.img} />
                <div className="blogsContent">
                  <div className="travelChip">
                    <p>Travel</p>
                  </div>
                  <div className="trendingFlex">
                    <img src={img} />
                    <p>Jenny kiaa</p>
                  </div>
                  <div className="trendingTime">
                    <img src={calender} />
                    <p>02 december 2022</p>
                    <img src={time} />
                    <p>3 min. to read</p>
                  </div>
                  <p className="trendingEnd">
                    Did you come here for something in particular or just
                    general Riker-bashing? And blowing into maximum warp
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="addHere">
           <h1>Add Here</h1>
        </div>
        <div className="blogsPart1">
          {blogsData.slice(3,-1).map((item) => {
            return (
              <div className="singleBlog">
                <img src={item?.img} />
                <div className="blogsContent">
                  <div className="travelChip">
                    <p>Travel</p>
                  </div>
                  <div className="trendingFlex">
                    <img src={img} />
                    <p>Jenny kiaa</p>
                  </div>
                  <div className="trendingTime">
                    <img src={calender} />
                    <p>02 december 2022</p>
                    <img src={time} />
                    <p>3 min. to read</p>
                  </div>
                  <p className="trendingEnd">
                    Did you come here for something in particular or just
                    general Riker-bashing? And blowing into maximum warp
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*  */}
      
      <div className="BlogsPart2">
        Here Come the Right Repeated Side Bar
      </div>



    </div>
  );
};

export default Blogs;