import { makeStyles, ThemeOptions } from '@material-ui/core'

const useStyles = makeStyles(
  (theme: ThemeOptions) => ({
    root: {
      width: '100%',
      height: '60px',
      background: theme.topBar?.backgroundColor,
      borderBottom: `2px solid ${theme.topBar?.borderBottomColor}`
    }
  }),
  {
    name: 'TopBar'
  }
)

const TopBar = () => {
  const classes = useStyles()

  return <div className={classes.root}></div>
}

export default TopBar
