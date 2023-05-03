import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
.btn {
    padding: 20px;
    text-align: center;
    background-color: #1a3a32; 
    color: white;
    border-radius: 40px;
    margin-bottom: 20px;
    width: 200px;
}


`;

const ButtonComponent = ({type}) => {

    return (
        <Wrapper>
            <div className='btn'>
                    {type} sale
                </div>
        </Wrapper>
    )
}

export default ButtonComponent;