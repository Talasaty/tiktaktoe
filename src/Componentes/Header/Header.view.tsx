import styled from 'styled-components';
import * as React from 'react';

const HeaderStyle = styled.div`
    background-color: ${p => p.theme.headerBackground};
    height: 30%;
    max-height: 150px;
    width: 100%;
`
const Title = styled.div`
    font-size: 5vw;
    color: white;
    padding: 30px;
`


const Header = (props: any) => {
    return(
        <HeaderStyle>
            <Title>
                {props.children}
            </Title>
        </HeaderStyle>
    )
}

export default Header