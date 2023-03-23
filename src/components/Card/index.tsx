import { Button } from "../Button";
import { CardContainer, BodyCard, Title, Line} from "./styles";

type PropsCard = {
    title: string;
    texto: string;
}

export function Card({ texto, title }: PropsCard) {
    return (
        <CardContainer>
            <BodyCard>
                <Title>{title}</Title>
                <Line />
                <p>
                    {texto}
                </p>
                <div>
                    <Button />
                </div>
            </BodyCard>
        </CardContainer>
    );
}