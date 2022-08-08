import CardStyles from "./Card.module.css"
import {ReactNode} from "react";

export type CardProps = {
    title: string,
    children: ReactNode
}

const Card: React.FC<CardProps> = ({title, children}) => {
    return <div className={`${CardStyles.card}`}>
        <h1>{title}</h1>
        {children}
    </div>
}

export default Card;