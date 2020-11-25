import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "6px 16px",
    backgroundColor:"red",
    },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="danger"
        color="secondary"
        className={classes.button}
        startIcon={<BlockSharpIcon />}
      >
       Block User
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
    </div>
  );
}
