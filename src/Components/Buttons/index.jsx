    import React from "react";
    import { StyledButton } from "./buttons.styles";

    const Button = ({
    children,
    lg,
    variant = 'purple', 
    width,
    disabled,
    ...rest
    
    }) => {
    return (
        <StyledButton
        $lg={lg}
        $width={width}
        $variant={variant}
        disabled={disabled}
        {...rest}
        >
        {children}
        </StyledButton>
    );
    };

    export default Button;