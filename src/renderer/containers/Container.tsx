import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AddConnection from '@material-ui/icons/AddCircleOutlineOutlined'
import ListItemLink from '../components/ListItemLink/ListItemLink'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
)

export default ({ children }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left">
        <List>
          <ListItemLink to="/add-connection" icon={<AddConnection />} primary="Add connection" />
          <ListItemLink to="/messages" icon={<AddConnection />} primary="Messages" />
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  )
}

interface Props {
  children: JSX.Element | JSX.Element[]
}