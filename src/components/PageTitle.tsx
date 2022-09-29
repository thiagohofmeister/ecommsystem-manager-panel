import { makeStyles, ThemeOptions } from '@material-ui/core'
import { PropsWithChildren } from 'react'

const useStyles = makeStyles(
  (theme: ThemeOptions) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '10px',
      '& > h1': {
        fontSize: '16px',
        color: theme.pageTitle?.h1Color
      },
      '&__right': {}
    }
  }),
  {
    name: 'PageTitle'
  }
)

const PageTitle: React.FC<PageTitleProps> = ({ title, children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1>{title}</h1>

      {children && <div className={`${classes.root}__right`}>{children}</div>}
    </div>
  )
}

interface PageTitleProps extends PropsWithChildren {
  title: string
}

export default PageTitle
