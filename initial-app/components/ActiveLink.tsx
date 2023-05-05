import { useRouter } from "next/router"
import Link from "next/link"
import { CSSProperties, FC } from "react";

const style: CSSProperties = {
    textDecoration: 'underline',
    color: 'blue', 
}

// Interfaz para tipar las variables props
interface Props{
    text: string;
    href: string;
}

// Desestrucutracion. Se pasan argumentos
export const ActiveLink: FC<Props> = ({text, href}) => {
  
    const { asPath } = useRouter();
    
    return (
    <Link href={ href } style={ asPath === href ? style : undefined }>
        { text }
    </Link>
    )
}
