import React from 'react'
import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { Moon, Sun } from 'tabler-icons-react'

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size={'xl'}
      radius={'md'}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6]
      })}
    >
      {colorScheme === 'dark' ? <Sun width={20} height={20} /> : <Moon width={20} height={20} />}
    </ActionIcon>
  )
}

export default ColorSchemeToggle
