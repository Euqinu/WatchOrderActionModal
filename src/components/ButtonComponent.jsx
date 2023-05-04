import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';



const ButtonComponent = ({ type,handleSale, isLoading }) => {

const Wrapper = styled.div`
.btn {
    padding: 20px;
    text-align: center;
    background-color: ${type === 'Reject' ? 'white' : '#1a3a32'}; 
    color: ${type === 'Reject' ? '#1a3a32' : 'white'};
    border-radius: 40px;
    margin-bottom: 20px;
    width: 100%;
    font-weight: 600;
    cursor: pointer;
}

.loader {
    padding:0px;
    
}
`;

    return (
        <Wrapper>
            <div className='btn' onClick={()=>handleSale(type)}>
                {
                    isLoading ?  <CircularProgress size={25} className='loader' color="success" /> : `${type} sale`
                }
            </div>
        </Wrapper>
    )
}

export default ButtonComponent;