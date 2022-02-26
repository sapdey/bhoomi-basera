import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import ReactPlayer from "react-player/youtube";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ images, videoURL }) {
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery("(min-width:600px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CardMedia
        onClick={handleClickOpen}
        component="img"
        height="180"
        image={images[0]}
        alt="image"
      />

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {images.map((img, i) => (
          <Typography
            component="div"
            margin={2}
            marginBottom={0}
            display="flex"
            justifyContent="center"
            key={i}
          >
            <CardMedia
              component="img"
              height="180"
              image={img}
              alt="image"
              // sx={{
              //   padding: "10px 0",
              // }}
            />
          </Typography>
        ))}
        <Typography
          component="div"
          marginTop={2}
          display="flex"
          justifyContent="center"
        >
          <ReactPlayer
            width={matches ? 640 : 320}
            height={matches ? 360 : 180}
            url={videoURL}
          />
        </Typography>
        {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List> */}
      </Dialog>
    </div>
  );
}
