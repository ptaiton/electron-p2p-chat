import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import BubbleLoading from '../../components/BubbleLoading/BubbleLoading'
import { ADD_CONNECTION } from '../../actions/connection/connectionActions'
import { isIpValid } from '../../utils/ipValidator'
import { isHostUp } from '../../utils/socket'
import { InputChangeEventHandler } from '../../types/events'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  hostCheck: {
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default () => {
  const [ host, setHost ] = useState('')
  const [ name, setName ] = useState('')
  const [ hostIpError, setHostIpError ] = useState('')
  const [ hostIpWarning, setHostIpWarning ] = useState('')
  const [ hostLoading, setHostLoading ] = useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleIpInputChange: InputChangeEventHandler = async (event) => {
    const value = event.target.value
    setHost(value)

    const isValid = isIpValid(value) 
    setHostIpError(isValid ? '' : 'IP format is not valid')
    if(isValid) {
      setHostLoading(true)
      const isUp = await isHostUp(value)
      setHostLoading(false)
      setHostIpWarning(isUp ? 'Host is up !' : 'Host is not up')
    }
  }

  const handleNameInputChange: InputChangeEventHandler = (event) => {
    setName(event.target.value)
  }

  const handleAddConnectionClick = () => {
    dispatch({type: ADD_CONNECTION, connection: { host, name, messages: [] }})
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <RecordVoiceOverIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter peer host informations
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            label="Name"
            onChange={handleNameInputChange}
            value={name}
            autoFocus
            fullWidth />
          <TextField
            variant="outlined"
            margin="normal"
            label="Host IP"
            error={!!hostIpError}
            onChange={handleIpInputChange}
            value={host}
            helperText={hostIpError}
            fullWidth
            required />
          <div className={classes.hostCheck}>
            {(hostLoading || !!hostIpWarning) && <Typography>{hostLoading ? 'Checking for host' : hostIpWarning}</Typography>}
            {hostLoading && <BubbleLoading /> }
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAddConnectionClick}
            className={classes.submit}
            disabled={!host || !!hostIpError}>
            Add Connection
          </Button>
        </form>
      </div>
    </Container>
  )
}