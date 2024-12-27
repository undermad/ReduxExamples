import clsx from "clsx";
import {HTMLAttributes} from "react";


type ButtonProps = {
    variant: "primary" | "secondary",
    children?: React.ReactNode,
} & HTMLAttributes<HTMLButtonElement>

const Button = ({variant, children, ...rest}: ButtonProps) => {
    
    
    
    
    return <button {...rest}
                   className={clsx("px-6 py-2 rounded",
                       variant === 'primary' && "bg-amber-200",
                       variant === 'secondary' && "bg-amber-800",
                       rest.className
                   )}>
        {children}
    </button>
}

export default Button;