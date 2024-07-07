import { create } from 'zustand'

type TPressCount = {
    count: number
}

export const usePressCount = create<TPressCount>() (() => ({
    count: 0
}))

export const incrementCount = (value:number) => usePressCount.setState((state) => ({count: state.count + value}))