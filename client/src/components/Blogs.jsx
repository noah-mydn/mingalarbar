import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardActions,
  CardActionArea,
  CardContent,
  Button,
} from "@mui/material";
import React from "react";
import theme from "../theme/theme";

export const Blogs = () => {
  const CardData = [
    {
      id: 1,
      url: "https://live.staticflickr.com/5602/14962115693_56a30ace3d_b.jpg",
      alt: "Pickled Tea leaf salad",
      title: "Unveiling the Secret of Pickled Tea Leaf Salad",
      desc: "Discover the origins and health benefits of Pickled Tea Leaf Salad, a refreshing and flavorful Burmese specialty made with fermented tea leaves, fresh vegetables, and crunchy nuts.",
    },

    {
      id: 2,
      url: "https://travelfoodatlas.com/wp-content/uploads/2022/09/Mohinga.jpg",
      alt: "Mohinga",
      title: "Mastering the Art of Mohinga",
      desc: "Dive into the world of Mohinga, the quintessential Burmese dish that's enjoyed by locals for breakfast, lunch, and dinner.Learn about its rich history, ingredients, and techniques to make this flavorful fish noodle soup in your own kitchen.",
    },

    {
      id: 3,
      url: "https://i0.wp.com/chicagoreader.com/wp-content/uploads/2021/07/familyhouse-groupshot_12.jpg?fit=1200%2C800&ssl=1",
      alt: "Burmese cuisine",
      title: "The Health Benefits of Burmese Cuisine",
      desc: "Burmese cuisine, with its emphasis on fresh ingredients and bold flavors, is not only delicious but also offers a range of health benefits. In this blog post, we will explore the various health benefits of Burmese cuisine",
    },
  ];

  const BlogButton = styled(Button)({
    padding: "0.5em 1em",
    background: theme.palette.secondary.main,
    fontFamily: "Jost",
    color: theme.palette.primary.light,
    margin: "1em auto",
    "&:hover": {
      background: theme.palette.secondary.main,
      color: "#fff",
    },
  });

  const BlogContainer = ({ url, alt, title, desc }) => {
    return (
      <Card
        sx={{ maxWidth: 300, margin: "2em 0", borderRadius: 4 }}
        elevation={4}
      >
        <CardActionArea>
          <CardMedia component="img" height="200" image={url} alt={alt} />
          <CardContent sx={{ height: 150 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="Jost"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
                fontFamily: "Jost",
                fontWeight: "normal",
              }}
            >
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <BlogButton size="large">View Blog</BlogButton>
        </CardActions>
      </Card>
    );
  };

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexWrap="wrap"
    >
      {CardData.map((blog) => {
        return (
          <BlogContainer
            key={blog.id}
            url={blog.url}
            alt={blog.alt}
            title={blog.title}
            desc={blog.desc}
          />
        );
      })}
    </Box>
  );
};
