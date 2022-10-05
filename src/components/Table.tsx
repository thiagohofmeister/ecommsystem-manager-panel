import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme, TableProps>(
  theme => ({
    root: {
      display: 'grid',
      gridTemplateColumns: props => props.gridTemplateColumns
    }
  }),
  {
    name: 'Table'
  }
)

const Table: React.FC<TableProps> = props => {
  const classes = useStyles(props)

  return <div className={classes.root}></div>
}

interface TableProps {
  gridTemplateColumns: string
}

export default Table
