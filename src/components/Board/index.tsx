import { loadLists } from '@/services/api'
import produce from 'immer'
import { useState } from 'react'

import { List } from '../List'
import BoardContext from './context'
import * as S from './styles'

const data = loadLists()

export type ListProps = typeof data

export function Board() {
  const [lists, setLists] = useState(data)

  function move(fromList: number, toList: number, from: number, to: number) {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from]

        if (draft[toList].cards.length === 0) {
          draft[toList].cards = [dragged]
          draft[fromList].cards.splice(from, 1)
          return
        }
        draft[fromList].cards.splice(from, 1)

        draft[toList].cards.splice(to, 0, dragged)
      })
    )
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <S.Wrapper>
        {lists?.map((list, key) => (
          <List key={list.title} index={key} {...list} />
        ))}
      </S.Wrapper>
    </BoardContext.Provider>
  )
}
