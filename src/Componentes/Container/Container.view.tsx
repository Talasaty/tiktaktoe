import * as React from 'react';
import styled from 'styled-components';


const Squard = styled.div`
    background-color: ${p => p.theme.ContainerBackground};
    width:1020px;
    margin: 5%;
    border-style: solid;
    border-width: 3px;
    border-color: ${p => p.theme.ContainerBorder};
`

const Container = (props: any) => {
    return(
        <Squard>
            {props.children}
        </Squard>
    )
}

export default Container;