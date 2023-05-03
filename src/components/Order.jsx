import React from 'react';
import styled from 'styled-components';
import watchimg from '../assets/watch3.png';
import Typography from '@mui/material/Typography';
import WatchPopover from './WatchPopover';


const Wrapper = styled.div`
display:block;
position: absolute;
height: 100%;
width: 100%;
top:0;
left:0;
background-color:rgb(218, 224, 223);
// opacity:0.75;
.item-img {
    height: 100%;
    width: 50%;
    background-color: #faf5f5;
    border-radius: 30px;
    img {
        height: 100vh;
    }
}

.item-desc {
    height:100%;
    padding: 30px 0px 30px 50px;
}

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

const Order = () => {
    return (
        <Wrapper>
            <div className='item-img'>
                <img src={watchimg} />
            </div>
            <div className='item-desc'>
                <p> SHOP / REF 116660 /</p>
                <h1>2014 Rolex DeepSea Sea-DeepSea Rolex Cameron</h1>
                <div className='btn'>
                    Accept sale
                </div>
                <div className='btn'>
                    Reject sale
                </div>
            </div>
            <WatchPopover/>
        </Wrapper>
    )
}

export default Order;