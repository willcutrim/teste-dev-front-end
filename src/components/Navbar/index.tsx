import { List, Title, HeaderContainer, HeaderContent } from './styles';

export function Navbar(){


    return (
        <HeaderContainer>
            <HeaderContent>
                <Title>News</Title>
                
                <List>
                    <a>Home</a>
                    <a>Usuários</a>
                </List> 
            </HeaderContent>
        </HeaderContainer>
    )
}