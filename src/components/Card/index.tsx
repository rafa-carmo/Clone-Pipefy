/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BoardContext from '@/components/Board/context'
import { useRef, useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import * as S from './styles'

export interface CardProps {
  id: string | number
  index?: number
  listIndex?: number
  content: string
  labels: string[]
  user?: string
}

export type dragProps = {
  type: 'CARD'
  index: number
  listIndex: number
}
export function Card({ content, labels, user, index, listIndex }: CardProps) {
  const ref = useRef<HTMLInputElement>()
  const { move } = useContext(BoardContext)

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'CARD',
    item: { type: 'CARD', index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: dragProps, monitor) {
      const draggedListIndex = item.listIndex
      const targetListIndex = listIndex

      const draggedIndex = item.index
      const targetIndex = index
      console.log(draggedIndex, targetIndex)

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return
      }

      const targetSize = ref?.current?.getBoundingClientRect()
      const targetCenter = (targetSize!.bottom - targetSize!.top) / 2

      const draggedOffset = monitor.getClientOffset()
      const draggedTop = draggedOffset!.y - targetSize!.top

      if (draggedIndex < targetIndex! && draggedTop < targetCenter) {
        return
      }

      if (draggedIndex > targetIndex! && draggedTop > targetCenter) {
        return
      }

      move(draggedListIndex, targetListIndex!, draggedIndex, targetIndex!)
      item.index = targetIndex!
      item.listIndex = targetListIndex!
    }
  })

  dragRef(dropRef(ref))
  return (
    <S.Wrapper isDragging={isDragging} ref={ref}>
      <S.Content isDragging={isDragging}>
        <S.Header>
          {labels.map((label) => (
            <S.Label key={label} style={{ backgroundColor: label }} />
          ))}
        </S.Header>
        <S.Title>{content}</S.Title>
        {user && <S.Avatar src={user} alt="Avatar" />}
      </S.Content>
    </S.Wrapper>
  )
}
