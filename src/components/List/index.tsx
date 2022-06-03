/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BoardContext from '@/components/Board/context'
import { Plus } from 'phosphor-react'
import { useContext, useRef } from 'react'
import { useDrop } from 'react-dnd'

import { Card, CardProps, dragProps } from '../Card'
import * as S from './styles'

interface ListProps {
  title: string
  creatable: boolean
  done?: boolean
  cards: CardProps[]
  index: number
}

export function List({ cards, creatable, title, done, index }: ListProps) {
  const { move } = useContext(BoardContext)
  const ref = useRef<HTMLDivElement>()

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: dragProps) {
      const draggedListIndex = item.listIndex
      const targetListIndex = index

      const draggedIndex = item.index ? item.index : 0
      const targetIndex = cards?.length ? cards.length : 0

      if (draggedListIndex === targetListIndex) {
        return
      }
      move(draggedListIndex, targetListIndex!, draggedIndex, targetIndex!)
      item.index = targetIndex!
      item.listIndex = targetListIndex!
      return
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true })
    })
  })

  return (
    <S.Wrapper ref={ref} className={`${done && 'opacity-60'}`}>
      <S.Mark
        ref={dropRef}
        className={`w-[${ref.current?.offsetWidth}px] h-[${ref.current?.offsetHeight}px]`}
      />
      <S.Header>
        <S.Title>{title}</S.Title>
        {creatable && (
          <S.Button type="button">
            <Plus weight="bold" />
          </S.Button>
        )}
      </S.Header>
      <S.ListCards>
        {cards?.map(
          (card, key) =>
            card && (
              <Card key={card.id} listIndex={index} index={key} {...card} />
            )
        )}
      </S.ListCards>
    </S.Wrapper>
  )
}
