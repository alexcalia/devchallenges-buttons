import React from 'react';
import styled from 'styled-components';

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

  & > span {
    font-size: 14px;
    ${props => props.startIcon
      ? 'margin-right: 6px'
      : 'margin-left: 6px'
    };
  }
`

const Button = ({children, size, disableShadow, variant, color, startIcon, endIcon, disabled}) => {
  
  return (
    <StyledButton 
      size={size} 
      color={color} 
      variant={variant} 
      disableShadow={disableShadow} 
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {startIcon && <span className="material-icons">{startIcon}</span>}
      {children}
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </StyledButton>
  )
}
export default Button;