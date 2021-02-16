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
  border: ${props => props.variant === "outline" && props.color
    ? `1px solid ${props.theme.colors[props.color].button.dark}`
    : props.variant === "outline"
    ? `1px solid ${props.theme.colors.default.button.dark}`
    : 'none'
  };
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
    ? props.theme.colors[props.color].button.light
    : props.theme.colors.default.button.light
  };

  &:hover {
    background-color: ${props => props.variant && props.color
      ? props.theme.colors[props.color].button.variant
      : props.variant
      ? props.theme.colors.default.button.light
      : props.color
      ? props.theme.colors[props.color].button.dark
      : props.theme.colors.default.button.dark
    }
  };

  &:focus {
    background-color: ${props => props.variant && props.color
      ? props.theme.colors[props.color].button.variant
      : props.variant
      ? props.theme.colors.default.button.light
      : props.color
      ? props.theme.colors[props.color].button.dark
      : props.theme.colors.default.button.dark
    }
  };
  
  color: ${props => props.disabled 
    ? '#9E9E9E' 
    : props.variant && props.color
    ? props.theme.colors[props.color].button.dark
    : props.variant
    ? props.theme.colors.default.button.dark
    : props.color
    ? props.theme.colors[props.color].text
    : props.theme.colors.default.text
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