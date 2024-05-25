import {Meta} from '@storybook/react-vite'

import index from './index.tsx'

const meta = {
    component:index
} satisfies Meta <typeof index>

export default meta
type Story = StoryObj<typeof meta>

export const FistTest = {

} satisfies Story

