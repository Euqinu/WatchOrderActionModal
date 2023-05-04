import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';
import { userDecision } from '../api';


const Wrapper = styled.div`

height: 400px;
width:900px;
padding:40px 40px 40px 60px;
background-color: white;
border-radius: 30px;
display: flex;
justify-content: space-around;
position: absolute;
z-index: 1000;
left:20%;
top:15%;
margin: auto;
.sale {
    margin-right:20px;
    padding: 20px;
    .info {
        color: grey;
        font-family: RiformaLLWeb-Regular,sans-serif;
        letter-spacing:2px;
        font-size: 12px;

    }
    .notif {
        color: grey;
        font-size: 12px;
        font-family: RiformaLLWeb-Regular,sans-serif;
    }
    .sold-info {
        font-family: RiformaLLWeb-Regular,sans-serif;
        color: #1a3a32;
        font-size: 24px;
        margin-bottom: 40px;
    }
}

.watch-info {
    background-color: #f7f3f2;
    border-radius: 30px;
    padding: 20px;
    width: 50%;
    
    .detail-heading {
        display: flex;
        justify-content: space-between;
    }
    hr {
        color: grey;
        margin-bottom:20px;
        margin-top: 10px;
        opacity:0.2;
    }
    .details {
        .watch-name {
            padding: 0px;
            margin:0px;
            font-size: 14px;
            color: #1a3a32;
            font-weight: 600;
        }
        .cond-year {
            font-size: 12px;
            color: grey;
        }
    }
  
    .watch-img {
       img {
        border-radius: 20px;
        height: 80px;
       }
    }
    .price-details {
        display:flex;
        justify-content: space-between;
        li {
            color: grey;
            font-size: 14px;
            list-style-type: none;
            margin-bottom: 10px;
            font-weight: 500;
        }
        .bezel {
            color: #1a3a32;
           }
        .total-amt {
           color: black;
        }
    }
}

.decision {
    h4 {
        font-size:50px;
        color: #1a3a32;
    }
}

`;

const WatchPopover = ({ listDetails }) => {
    const [isAccept, setIsAccept] = useState(false);
    const [isReject, setIsReject] = useState(false);
    const [isDecision, setIsDecision] = useState(false);
    const handleSale = (status) => {
        status === 'accept' ? setIsAccept(true) : setIsReject(true);
        setTimeout(() => {
            userDecision(listDetails.id, status)
                .then(res => {
                    setIsAccept(false);
                    setIsReject(false);
                    setIsDecision(true);
                })
                .catch(function (error) {
                    setIsAccept(false);
                    setIsReject(false);
                })
        }, 3000)

    }

    return (
        <Wrapper>
            {
                !isDecision ?
                    <>
                        <div className='sale'>
                            <h4 className='info'>CONGRATS ! </h4>
                            <h1 className='sold-info'>Your watch sold!</h1>
                            <p className='notif'>
                                You have 1 business day to accept the sale.
                            </p>
                            <p className='notif' style={{ marginBottom: '80px' }}>
                                If you do not accept, it will be automatically rejected.
                            </p>
                            <ButtonComponent type={'Accept'} handleSale={() => handleSale('accept')} isLoading={isAccept} />
                            <ButtonComponent type={'Reject'} handleSale={() => handleSale('decline')} isLoading={isReject} />

                        </div>
                        <div className='watch-info'>
                            <hr />
                            <div className='detail-heading'>
                                <div className='details'>
                                    <p className='watch-name'>{listDetails.brandName} {listDetails.name} {listDetails.referenceNumber}</p>
                                    <p className='cond-year'>{listDetails.condition} / {listDetails.manufactureYear}</p>
                                </div>
                                <div className='watch-img'>
                                    <img alt="bezel" src={listDetails.imageUrl} />
                                </div>
                            </div>
                            <hr />
                            <div className='price-details'>
                                <div className='type'>
                                    <li className>Selling Price</li>
                                    <li>Level 1 Commission</li>
                                    <li>Seller fee</li>
                                    <li>Insured Shipping</li>
                                    <li className='bezel'>Bezel authentication</li>
                                </div>
                                <div className='amount'>
                                    <li className>${listDetails.salePriceCents / 100}</li>
                                    <li>${listDetails.commissionRateBips / 100}</li>
                                    <li>${listDetails.sellerFeeCents / 100}</li>
                                    <li>Free</li>
                                    <li className='bezel'>Free</li>
                                </div>
                            </div>
                            <hr />
                            <div className='price-details'>
                                <div className='type'>
                                    <li className='total-amt'>Earnings</li>
                                </div>
                                <div className='amount'>
                                    <li className='total-amt'>${listDetails.payoutAmountCents / 100}</li>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className='decision'>
                        <h4 className='msg'>CONGRATS!</h4>
                    </div>
            }
        </Wrapper>
    )
}

export default WatchPopover;