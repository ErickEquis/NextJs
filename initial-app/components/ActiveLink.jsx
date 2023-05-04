import { useRouter } from "next/router"

import Link from "next/link"

const style = {
    textDecoration: 'underline',
    color: 'blue'
}
// Desestrucutracion. Se pasan argumentos
export const ActiveLink = ({text, href}) => {
  
    const { asPath } = useRouter();
    
    return (
    <Link href={ href } style={ asPath === href ? style : null }>
        { text }
    </Link>
    )
}
