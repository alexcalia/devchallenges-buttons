import React from 'react';
import styled from 'styled-components';

// color "primary", "secondary", "danger"- WORKS!!!
// variant "outline", "text"
// size
// startIcon + endIcon
// disabled- WORKS!!
// disableShadow- WORKS!!

const StyledButton = styled.button`
  font-weight: 500;
  font-family: Noto Sans JP;
  border-radius: 6px;
  padding: 10px;
  box-shadow: ${props => props.disableShadow || props.variant ? 'none' : `0px 2px 3px ${props.theme.colors[props.color].shadowColor}`};
  background: ${props => props.variant ? '#FFF' : props.theme.colors[props.color].bg.main};

  &:hover {
    background-color: ${props => props.disabled 
      ? props.theme.colors[props.color].bg.main 
      : props.variant 
      ? 'rgba(41, 98, 255, 0.1)' 
      :props.theme.colors[props.color].bg.hover}
  };

  &:focus {
    background-color: ${props => props.disabled 
      ? props.theme.colors[props.color].bg.main 
      : props.variant 
      ? 'rgba(41, 98, 255, 0.1)' 
      :props.theme.colors[props.color].bg.hover}
  };
  
  color: ${props => props.disabled 
            ? '#9E9E9E' 
            : props.variant
            ? '#3D5AFE'
            :props.theme.colors[props.color].color
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