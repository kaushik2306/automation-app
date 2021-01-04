import React, { useState } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import classes from "./modal.module.css";
export default function ModalView({ children, onClose }) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    onClose(false);
  };
  return (
    <Modal
      //   aria-labelledby="transition-modal-title"
      //   aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>{children}</Fade>
    </Modal>
  );
}
