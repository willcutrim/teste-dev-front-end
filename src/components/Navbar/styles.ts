import styled from "styled-components"


export const HeaderContainer = styled.header`
    background-color: #146C94;
    /* padding: 2.5rem 0 7.5rem; */

`


export const HeaderContent = styled.header`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    
    display: flex;
    justify-content: space-around;

    align-items: center;

`


export const List = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-around;
    color: #fff;
    font-size: 20px;
    
    a{
        &:hover {
            text-decoration: underline;
        }
    }
    
`
export const Title = styled.h2`

    color: #fff;
    font-size: 40px;
    
`