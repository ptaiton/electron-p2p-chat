import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import AddConnection from '@material-ui/icons/AddCircleOutlineOutlined'
import ListItemLink from '../components/ListItemLink/ListItemLink'
import ConnectionsList from '../components/ConnectionsList/ConnectionsList'
import { useSelector } from 'react-redux'
import { getConnections } from '../selectors/connectionSelectors'

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
  const connections = useSelector(getConnections)

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
        <List>
          <ConnectionsList connections={connections} />
        </List>
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