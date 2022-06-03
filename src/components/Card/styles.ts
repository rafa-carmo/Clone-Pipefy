import tw from 'tailwind-styled-components'

type WrapperProps = {
  isDragging: boolean
}
export const Wrapper = tw.div<WrapperProps>`

  relative
  rounded-md
  bg-white
  mb-2
  p-4
  shadow-md
  border-t-[20px]
  border-t-solid
  border-t-border-400
  cursor-grab
  ${({ isDragging }: WrapperProps) =>
    isDragging &&
    `
      border-2
      border-dashed
      border-black/[0.2]

      rounded-none
      shadow-none
      bg-transparent
      cursor-grabbing
    `}
`

export const Content = tw.div<WrapperProps>`
  ${({ isDragging }: WrapperProps) => isDragging && `opacity-0`}
`

export const Header = tw.header`
  absolute
  top-[-13px]
  left-3
  `

export const Label = tw.span`
  w-2
  h-2
  rounded-sm
  inline-block
`

export const Title = tw.p`
  font-medium
  text-xl
`

export const Avatar = tw.img`
  w-6
  h-6
  rounded-sm
  mt-1
`
