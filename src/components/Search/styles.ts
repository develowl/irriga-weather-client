import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  root: {
    flexGrow: 1,

    [`@media(min-width: ${theme.breakpoints.xs}px)`]: {
      maxWidth: 500
    }
  }
}))
