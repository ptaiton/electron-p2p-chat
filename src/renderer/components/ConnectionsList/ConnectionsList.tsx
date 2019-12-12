import React from 'react'
import ConnectionIcon from '@material-ui/icons/AccountCircle'
import ListItemLink from '../ListItemLink/ListItemLink'
import { ROUTES } from '../../types/route'
import { Connection } from '../../types/Connection'
import { serializeConnection } from '../../utils/connectionSerializer'

export default ({ connections }: Props) => {
  const getConnectionRoute = (host: string) => `${ROUTES.MESSAGES.path}/${serializeConnection(host)}`
  return (
    <React.Fragment>
      {connections.map(connection => (
        <ListItemLink
          key={connection.host}
          to={getConnectionRoute(connection.host)}
          icon={<ConnectionIcon />}
          primary={connection.name || connection.host} />
      ))}
    </React.Fragment>
  )
}

interface Props {
  connections: Connection[]
}