import React from 'react'
import styled from 'styled-components'

interface GridContainerProps {
  gridGap: number
  columns: number
}

const GridContainerStyled = styled.div.withConfig({
  shouldForwardProp: prop => !['columns', 'gridGap'].includes(prop),
})<GridContainerProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    `repeat(${columns}, minmax(0, 1fr))`};
  column-gap: ${({ gridGap }) => gridGap}px;
  row-gap: 0px;
  position: relative;
  margin: 0 auto;
`

export const GridContainer = React.memo(GridContainerStyled)