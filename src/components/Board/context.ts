import { loadLists } from '@/services/api'
import { createContext } from 'react'

const lists = loadLists()

export default createContext({
  lists,
  move: (fromList: number, toList: number, from: number, to: number) => {
    const data = []
    data.push(fromList, toList, from, to)
    return
  }
})
