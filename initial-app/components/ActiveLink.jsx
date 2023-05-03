import Link from "next/link"

const style = {
    color: blue,
    textDecoration: 'underline'
}
// Desestrucutracion. Se pasan argumentos
export const ActiveLink = ({text, href}) => {
  return (



    <Link href={ href } style={style}>
        { text }
    </Link>
    )
}
