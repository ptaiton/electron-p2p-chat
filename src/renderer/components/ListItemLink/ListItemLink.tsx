import React, { useMemo, forwardRef } from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

type renderLinkRef = Omit<RouterLinkProps, 'innerRef' | 'to'>

export default ({ icon, primary, to }: Props) => {
  const renderLink = useMemo(() => forwardRef<HTMLAnchorElement, renderLinkRef>((itemProps, ref) => (
    <RouterLink to={to} {...itemProps} innerRef={ref} />
  )), [to])

  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  )
}

interface Props {
  icon?: React.ReactElement
  primary: string
  to: string
}