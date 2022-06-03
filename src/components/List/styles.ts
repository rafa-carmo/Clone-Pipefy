import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`
  py-0
  px-4
  min-h-full
  min-w-[50px]
  grow-0
  shrink-0
  basis-80
  first:border-0
  border-l-2
  border-l-solid
  border-l-black/[.05]
  relative

`
export const Mark = tw.div`
  absolute

  top-0
  left-0
  bottom-0
  right-0
  z-0
`

export const Header = tw.header`
  flex
  justify-between
  items-center
  h-[42px]
  relative

`

export const Title = tw.h2`
  font-medium
  text-base
  py-3
  relative
  z-1
`

export const Button = tw.button`
  w-[42px]
  h-[42px]
  rounded-full
  bg-sky-600 p-2
  text-white
  cursor-pointer
  flex
  justify-center
  items-center
`

export const ListCards = tw.ul`
  mt-8
`
