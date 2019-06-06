import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import "./Blog.scss";

const Blog = (props) => {
  const { blog, blogThumbnails } = props;
  const { blogImg, blogTitle, blogText } = blog;
  return (
    <div id="blog">
      <h1>Blog</h1>
      <section className="blog-content">
        <Card className="no-border">
          <CardBody>
            <CardImg top src={blogImg} alt={blogTitle} />
            <CardTitle>{blogTitle}</CardTitle>
            <CardText>{blogText}</CardText>
          </CardBody>
        </Card>
        <section className="thumbnails">
          {blogThumbnails &&
            blogThumbnails.length &&
            blogThumbnails.map((thumbnail) => {
              const { img, title, text } = thumbnail;
              return (
                <Card key={img}>
                  <div>
                    <img src={img} alt="blog post" width="200px" />
                  </div>
                  <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{text}</CardText>
                  </CardBody>
                </Card>
              );
            })}
        </section>
      </section>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    blogImg: PropTypes.string,
    blogTitle: PropTypes.string,
    blogText: PropTypes.string
  }),
  blogThumbnails: PropTypes.array
};

Blog.defaultProps = {
  blog: {
    blogImg: "https://via.placeholder.com/400",
    blogTitle: "Top Blog",
    blogText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  blogThumbnails: [
    {
      img: "https://via.placeholder.com/200",
      title: "Thumbnail 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      img: "https://via.placeholder.com/200",
      title: "Thumbnail 2",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

export default Blog;
