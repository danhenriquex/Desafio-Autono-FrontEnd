import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cardStyle: {
      // display: 'block',
      // width: '30vw',
      transitionDuration: '0.3s',
      height: '10vw',
      fontSize: 5,
    },
  }),
);

interface BookApiInterface {
  id?: string;
  selfLink: string;
  volumeInfo?: {
    title: string;
    subtitle: string;
    publishedDate: string;
    authors: [];
    imageLinks: { thumbnail: string; smallThumbnail: string };
    description: string;
    infoLink: string;
  };
}

export interface ownProps {
  book: BookApiInterface[];
  totalItems?: number;
}

const BookReviewCard: React.FC<ownProps> = React.memo(
  ({ book }): JSX.Element => {
    const classes = useStyles();

    return (
      <>
        {book.map(books => (
          <Card className={classes.root} key={books.id}>
            <CardHeader
              className={classes.cardStyle}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={books.volumeInfo?.title}
              subheader={books.volumeInfo?.publishedDate}
            />
            <CardMedia
              className={classes.media}
              image={books.volumeInfo?.imageLinks?.thumbnail}
              title={books.volumeInfo?.title}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* {books.volumeInfo?.description} */}
                <a href={books?.volumeInfo?.infoLink}>Detalhes</a>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </>
    );
  },
);

export default BookReviewCard;
