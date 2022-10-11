import { createTheme } from '@material-ui/core/styles'

export default createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0
        },
        html: {
          height: '100vh',
          overflow: 'hidden'
        },
        body: {
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          overflow: 'hidden',
          minHeight: '100vh'
        },
        code: {
          fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
        },
        'textarea, input, button, select': {
          fontFamily: 'inherit',
          fontSize: 'inherit'
        },
        a: {
          textDecoration: 'none',
          color: 'inherit'
        },
        '::-webkit-scrollbar': {
          width: ' 5px'
        },
        '::-webkit-scrollbar-track': {
          background: '#e8e8e8'
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#a9a9a9',
          borderRadius: '100px'
        }
      }
    }
  },
  activityIndicatorBackgroundColor: 'blue',
  table: {
    body: {
      column: {
        color: 'red'
      },
      row: {
        borderBottomColor: 'red',
        hoverBackgroundColor: 'blue',
        selectedBackgroundColor: 'gray',
        disabledBackgroundColor: 'gray',
        disabledColor: 'darkgray'
      }
    }
  },
  list: {
    paginator: {
      breakColor: '#96a1a8',
      page: {
        backgroundColor: '#FFF',
        hover: {
          borderColor: '#f4f5f5',
          backgroundColor: '#ccc'
        },
        active: {
          borderColor: '#f4f5f5',
          backgroundColor: '#ccc'
        },
        buttonPaginate: {
          iconColor: '#ccc',
          disabled: {
            iconColor: '#c4c4c4'
          }
        }
      }
    }
  },
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
    activityIndicatorBackgroundColor?: React.CSSProperties['backgroundColor']
    iconColor?: React.CSSProperties['color']
    list?: {
      paginator?: {
        breakColor?: React.CSSProperties['color']
        page?: {
          color?: React.CSSProperties['color']
          backgroundColor?: React.CSSProperties['backgroundColor']
          hover?: {
            borderColor?: React.CSSProperties['borderColor']
            backgroundColor?: React.CSSProperties['backgroundColor']
          }
          active?: {
            borderColor?: React.CSSProperties['borderColor']
            backgroundColor?: React.CSSProperties['backgroundColor']
          }
          buttonPaginate?: {
            iconColor?: React.CSSProperties['color']
            disabled?: {
              iconColor?: React.CSSProperties['color']
            }
          }
        }
      }
    }
    panel?: {
      backgroundColor?: React.CSSProperties['backgroundColor']
    }
    panelMessage?: {
      mainTextColor?: React.CSSProperties['color']
      secondTextColor?: React.CSSProperties['color']
    }
    table?: {
      header?: {
        backgroundColor?: React.CSSProperties['backgroundColor']
        column?: {
          color?: React.CSSProperties['color']
        }
      }
      body?: {
        column?: {
          color?: React.CSSProperties['color']
        }
        row?: {
          borderBottomColor?: React.CSSProperties['borderBottomColor']
          hoverBackgroundColor?: React.CSSProperties['backgroundColor']
          selectedBackgroundColor?: React.CSSProperties['backgroundColor']
          disabledBackgroundColor?: React.CSSProperties['backgroundColor']
          disabledColor?: React.CSSProperties['color']
        }
      }
    }
    button?: {
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
