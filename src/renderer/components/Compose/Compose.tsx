import React,{useState} from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import './Compose.css'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    compose: {
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      borderTop: '1px solid #eeeef1',
      position: 'fixed',
      bottom: 0,
      width: `calc(100% - ${drawerWidth}px)`,
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
)

export default (props:any) => {
  const [message, setMessage] = useState('')
  const classes = useStyles()

  const handleMessage = (event:any) => {
    setMessage(event.target.value)
  }

  const handleEnterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter'){
      addAndCleanMesssage()
    }
  }

  const addAndCleanMesssage = () => {
    if (message != null){
      props.addNewMessage(message)  
      setMessage("")
    }
  }

  return (
    <div className={classes.compose}>
      <TextField 
      placeholder="Type a message"
      onChange={handleMessage}
      value={message}
      onKeyPress={handleEnterPressed}
      fullWidth />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="SendIcon" onClick={addAndCleanMesssage}>
        <SendIcon />
      </IconButton>
    </div>
    
  )
}