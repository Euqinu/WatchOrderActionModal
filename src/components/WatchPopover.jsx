import React from 'react';
import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';


const Wrapper = styled.div`

height: 400px;
width:600px;
padding:20px;
background-color: white;
border-radius: 30px;
display: flex;
position: fixed;
top:60px;
left:240px;
// z-index: 100;
// left:40%;
// top:20%;
margin: auto;
// z-index: 1001;
.sale {
    margin-right:20px;
}

.watch-info {
    background-color: #e1ebe8;
    border-radius: 30px;
    padding: 20px;
    hr {
        color: grey;
        margin-bottom:20px;
        margin-top: 20px;
    }
}

`;

const WatchPopover = ()=> {
return (
    <Wrapper>
        <div className='sale'>
        <h4>CONGRATS ! </h4>
        <h2>Your watch sold!</h2>
        <p>
            You have 1 business day to accept the sale.
        </p>
        <p>
            If you do not accept, it will be automatically rejected.
        </p>
        <ButtonComponent type={'Accept'}/>
        <ButtonComponent type={'Reject'}/>

        </div>
        <div className='watch-info'>
            <hr/>
            <p>Rolex DeepSea Sea-Dweller James Cameron 116660</p>
            <p>New / 2014</p>
            <hr/>
        </div>
    </Wrapper>
)
}

export default WatchPopover;