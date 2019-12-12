import React,{useState} from 'react';
import './Compose.css';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);

export default function Compose(props:any) {
  const classes = useStyles();
  const [message, setMessage] = useState<string>('')

  const handleMessage = (event:any) => {
    setMessage(event.target.value)
  }

  const handleEnterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter'){
        addAndCleanMesssage()
      }
  }

  const addAndCleanMesssage = () => {
    if (message != ""){
      props.addNewMessage(message)  
      setMessage("")
    }
  }


  
  return (
    <div className="compose">
      <Button variant="outlined" color="primary" onClick={addAndCleanMesssage}>
        <SendIcon></SendIcon>
      </Button>
      <input
        type="text"
        className="compose-input"
        placeholder="Type a message, @name"
        onChange={handleMessage}
        value={message}
        onKeyPress={handleEnterPressed}
      />
      
    </div>
  );
}