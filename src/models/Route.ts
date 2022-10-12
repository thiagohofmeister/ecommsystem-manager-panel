export interface Route {
  label: string
  path: string
  root?: boolean
  index?: boolean
  component?: React.ReactNode | null
  items?: { [key: string]: Route }
}
