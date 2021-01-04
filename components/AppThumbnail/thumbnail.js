import React, { Fragment, useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
export default function Thumbnail({
  title,
  description,
  image,
  route,
  descriptionUIcomponent,
  actions,
}) {
  const [cardRaised, setCardRaised] = useState(false);
  return (
    <Card
      style={{ width: 345 }}
      raised={cardRaised}
      onMouseOver={() => {
        setCardRaised(true);
      }}
      variant="elevation"
      onMouseLeave={() => {
        setCardRaised(false);
      }}
    >
      <CardActionArea>
        <CardMedia
          style={{ height: 160 }}
          image={image}
          //   image="/static/images/cards/contemplative-reptile.jpg"
          title={title}
        />
        <CardContent>
          {descriptionUIcomponent != null ? (
            descriptionUIcomponent
          ) : (
            <Fragment>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </Fragment>
          )}
        </CardContent>
      </CardActionArea>
      {actions && (
        <CardActions>
          {actions.map((action) => (
            <Link key={action.buttontitle} href={action.onclick_route}>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                // onClick={() => {
                //   window.location.href = action.onclick_route;
                // }}
              >
                {action.buttontitle}
              </Button>
            </Link>
          ))}
        </CardActions>
      )}
    </Card>
  );
}
