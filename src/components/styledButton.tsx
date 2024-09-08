import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StylerdButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StylerdButtonProps> = ({children}) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display:"inline-flex",
        justifyContent:"center",
        alignItems: "center",
        gap:"10px",
        '&:hover':{ 
            backgroundColor: theme.palette.primary.light
        }
    }));    

    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </> 
    );
}

export default StyledButton;