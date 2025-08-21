import React from "react";
import BlogCard from "./BlogCard";
import NavPagesHeader from "../NavPagesHeader";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Blog() {
  const data = JSON.parse(localStorage.getItem("blog-data"));
  return (
    <div>
      <Navbar />
      <NavPagesHeader title="Insights" path={"Home / Blog"} />
      <div style={{ width: "80%", margin: "5rem auto" }} className="resp-w100p">
        <BlogCard
          path={data.path}
          heading={data.heading}
          content={data.content}
          date={data.date}
          isBlog={true}
        />
        <div className="mx-auto blog-text" style={{ width: "90%" }}>
          {data.mainContent.split("\n").map((element) => {
            return <div>{element}</div>;
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Blog;
