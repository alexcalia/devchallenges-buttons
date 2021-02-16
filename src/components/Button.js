import React from 'react';
import styled from 'styled-components';

// color "primary", "secondary", "danger"- WORKS!!!
// variant "outline", "text"
// size- WORKS!!!
// startIcon + endIcon
// disabled- WORKS!!
// disableShadow- WORKS!!

const StyledButton = styled.button`
  font-weight: 500;
  font-family: 'Noto Sans JP';
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  border: none;
  padding: ${props => props.size === 'lg' 
    ? props.theme.size[props.size]
    : props.size === 'sm'
    ? props.theme.size[props.size]
    : props.theme.size.md
  };
  box-shadow: 0px 2px 3px ${props => props.disableShadow || props.variant 
    ? 'none' 
    : props.color 
    ? props.theme.colors[props.color].shadow
    : props.theme.colors.default.shadow
  };
  background: ${props => props.variant 
    ? '#FFF' 
    : props.color 
    ? props.theme.colors[props.color].main.regular
    : props.theme.colors.default.main.regular
  };

  &:hover {
    background-color: ${props => props.disabled 
      ? props.theme.colors[props.color].main.regular 
      : props.variant 
      ? 'rgba(41, 98, 255, 0.1)' 
      : props.theme.colors[props.color].main.hover}
  };

  &:focus {
    background-color: ${props => props.disabled 
      ? props.theme.colors[props.color].main.regular 
      : props.variant 
      ? 'rgba(41, 98, 255, 0.1)' 
      : props.theme.colors[props.color].main.hover}
  };
  
  color: ${props => props.disabled 
    ? '#9E9E9E' 
    : props.variant && props.color
    ? props.theme.colors[props.color].main.regular
    : props.variant
    ? props.theme.colors.default.main.regular
    : props.theme.colors[props.color].text
  };
`


const Button = ({children, size, disableShadow, variant, color, startIcon, endIcon, disabled}) => {
  
  return (
    <StyledButton 
      size={size} 
      color={color} 
      startIcon={startIcon} 
      endIcon={endIcon} 
      variant={variant} 
      disableShadow={disableShadow} 
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}
export default Button;