import styled from "styled-components";

export const ContainerFooter = styled.footer`
    display: flex;
    flex: 1;
    min-width: 100vh;

    justify-content: space-between;
    align-items: center;
    background-color: #146C94;
    color: #fff;
    padding: 10px;
    
    a {
        color: #fff;
        text-decoration: none;
        margin-right: 10px;
        font-size: 20px;
        &:hover {
            text-decoration: underline;
        }
    }
    

`