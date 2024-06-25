import styled from 'styled-components'

// Styled component using destructuring
const ButtonBase = styled.button`
  ${({ theme: { colors, spacing, fontSize } }) => {
    return `    
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
  
    padding-left: ${spacing.xs};
    padding-right: ${spacing.xs};

    background-color: ${colors.primary};
    color: ${colors.text};
    font-size: ${fontSize.medium};
    transition: background-color 0.3s;
  
    border-radius: 16px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.secondary};
    }

    &:active {
      background-color: ${colors.primaryDark};
    }

    .icon {
       display: inline-flex;
    }
  

    .label {
      padding: ${spacing.xs};
    }
    

    
  `
  }}
`

// StyledButtonFilled: Inherits from ButtonBase
const StyledButtonFilled = styled(ButtonBase)``

// StyledButtonOutline: Inherits from ButtonBase and changes to outline style
const StyledButtonOutline = styled(ButtonBase)`
  ${({ theme: { colors } }) => `
    background-color: transparent;
    border: 2px solid ${colors.primary};
  `}
`

// StyledButtonText: Inherits from ButtonBase and changes to text button style
const StyledButtonText = styled(ButtonBase)`
  ${() => `
    background-color: transparent;
    border: none;
  `}
`

export { StyledButtonFilled, StyledButtonOutline, StyledButtonText }
