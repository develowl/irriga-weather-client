import React from 'react'
import { Card as MantineCard, Divider } from '@mantine/core'
import { useStyles } from './styles'

export type CardProps = {
  title?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
}

const Card = ({ title, children, footer }: CardProps) => {
  const { classes } = useStyles()

  return (
    <MantineCard withBorder className={classes.root} radius={'md'} p={10} shadow={'md'}>
      {title && (
        <MantineCard.Section m={5}>
          {title}
          <Divider my={10} />
        </MantineCard.Section>
      )}
      <MantineCard.Section m={5}>{children}</MantineCard.Section>
      {footer && <MantineCard.Section m={5}>{footer}</MantineCard.Section>}
    </MantineCard>
  )
}

export default Card
