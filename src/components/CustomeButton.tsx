import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styled from 'styled-components';

const buttonVariants = {
  variant: {
    default: 'primary',
    destructive: 'destructive',
    outline: 'outline',
    secondary: 'secondary',
    ghost: 'ghost',
    link: 'link',
  },
  size: {
    default: 'default',
    sm: 'small',
    lg: 'large',
    icon: 'icon',
  },
} as const;

type ButtonVariant = keyof typeof buttonVariants.variant;
type ButtonSize = keyof typeof buttonVariants.size;

interface StyledButtonProps {
  $variant: ButtonVariant;
  size: ButtonSize;
  color?: string;
  $backgroundcolor?: string; 
  $hoverbackgroundcolor?: string; 
  $hovercolor?: string;
  $buttonradius?: string; 
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: ${(props) => props.$buttonradius || '4px'};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  /* Variant styles */
  ${(props) =>
    props.$variant === 'ghost' &&
    `
    background-color: ${props.$backgroundcolor || 'transparent'};
    color: ${props.color || '#000'};
    &:hover {
      background-color: ${
        props.$hoverbackgroundcolor || props.$backgroundcolor || 'transparent'
      };
      color: ${props.$hovercolor || props.color || '#000'};
    }
  `}

  /* Size styles */
  ${(props) =>
    props.size === 'icon' &&
    `
    height: 36px;
    width: 36px;
    padding: 0;
  `}
`;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      $variant = 'default',
      size = 'default',
      asChild = false,
      color,
      $backgroundcolor,
      $hoverbackgroundcolor,
      $hovercolor,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : StyledButton;
    return (
      <Comp
        $variant={$variant}
        size={size}
        color={color}
        // Using transient props
        $backgroundcolor={$backgroundcolor}
        $hoverbackgroundcolor={$hoverbackgroundcolor}
        $hovercolor={$hovercolor}
        ref={ref}
        {...props}
      />
    );
  },
);

CustomButton.displayName = 'Button';

export { CustomButton, buttonVariants };
