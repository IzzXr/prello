import { ReactElement } from 'react'

export interface UiHintProps {
  children: ReactElement | ReactElement[],
  title?: string
  description: string
}
