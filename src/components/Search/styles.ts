import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  root: {
    width: '100%',

    [`@media(min-width: ${theme.breakpoints.xs}px)`]: {
      maxWidth: 500,
      margin: '0 auto'
    }
  }
}))
