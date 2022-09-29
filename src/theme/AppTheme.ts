import { createTheme } from '@material-ui/core/styles'

export default createTheme({
  button: {
    save: {
      backgroundColor: 'green',
      color: 'white'
    },
    create: {
      backgroundColor: 'green',
      color: 'white'
    },
    cancel: {
      backgroundColor: 'none',
      color: 'red'
    }
  },
  inputContainer: {
    borderColor: '#c1c1c1',
    requiredColor: 'red',
    labelTitle: {
      color: '#c1c1c1',
      onFocusColor: 'black'
    },
    prefixAndSuffix: {
      backgroundColor: '#e2e2e2',
      color: '#999'
    }
  },
  textAreaContainer: {
    borderColor: '#c1c1c1',
    requiredColor: 'red',
    labelTitle: {
      color: '#c1c1c1',
      onFocusColor: 'black'
    },
    prefixAndSuffix: {
      backgroundColor: '#e2e2e2',
      color: '#999'
    }
  },
  pageTitle: {
    h1Color: '#333'
  },
  sideMenu: {
    backgroundColor: '#FFF',
    borderRightColor: 'rgba(21, 34, 50, 0.8)',
    menuItem: {
      backgroundColor: '#e1e1e1',
      color: '#333'
    },
    menuSubItem: {
      backgroundColor: '#e1e1e1',
      color: '#333'
    }
  },
  topBar: {
    backgroundColor: 'red',
    borderBottomColor: 'none'
  }
})

declare module '@material-ui/core/styles/createTheme' {
  // permitir configuração usando `createTheme`
  interface ThemeOptions {
    button: {
      save?: {
        backgroundColor?: React.CSSProperties['backgroundColor']
        color?: React.CSSProperties['color']
      }
      create?: {
        backgroundColor?: React.CSSProperties['backgroundColor']
        color?: React.CSSProperties['color']
      }
      cancel?: {
        backgroundColor?: React.CSSProperties['backgroundColor']
        color?: React.CSSProperties['color']
      }
    }
    inputContainer?: {
      borderColor?: React.CSSProperties['borderColor']
      requiredColor?: React.CSSProperties['color']
      labelTitle?: {
        color: React.CSSProperties['color']
        onFocusColor: React.CSSProperties['color']
      }
      prefixAndSuffix?: {
        backgroundColor?: React.CSSProperties['backgroundColor']
        color?: React.CSSProperties['color']
      }
    }
    textAreaContainer?: {
      borderColor?: React.CSSProperties['borderColor']
      requiredColor?: React.CSSProperties['color']
      labelTitle?: {
        color: React.CSSProperties['color']
        onFocusColor: React.CSSProperties['color']
      }
      prefixAndSuffix?: {
        backgroundColor?: React.CSSProperties['backgroundColor']
        color?: React.CSSProperties['color']
      }
    }
    pageTitle?: {
      h1Color?: React.CSSProperties['color']
    }
    sideMenu?: {
      backgroundColor?: React.CSSProperties['backgroundColor']
      borderRightColor?: React.CSSProperties['borderRightColor']
      menuItem?: {
        backgroundColor?: React.CSSProperties['backgroundColor']
        color?: React.CSSProperties['color']
      }
      menuSubItem?: {
        backgroundColor?: React.CSSProperties['backgroundColor']
        color?: React.CSSProperties['color']
      }
    }
    topBar?: {
      backgroundColor?: React.CSSProperties['backgroundColor']
      borderBottomColor?: React.CSSProperties['borderBottomColor']
    }
  }
}
