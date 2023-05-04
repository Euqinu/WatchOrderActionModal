import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WatchPopover from './WatchPopover';
import { getListingDetails } from '../api';


const Wrapper = styled.div`
height: 100%;
width: 100%;
display:flex;
justify-content: space-around;
.overlay {
    background-color: rgba(0,0,0,0.75);
    position: fixed;
    height:100%;
    top: 0;
    left:0;
    width:100%;
    z-index:100;
   
}

.item-img {
    height: 100%;
    width: 50%;
    background-color: #faf5f5;
    
    img {
        height: 100vh;
        border-radius: 30px;
    }
}

.item-desc {
    height:100%;
    padding: 30px 0px 30px 50px;
    .breadcrumb {
        font-family: RiformaLLWeb-Regular,sans-serif;
        color: #1a3a32;
        font-size: 14px;
        font-weight:600;
    }

    h1 {
        font-family: RiformaLLWeb-Regular,sans-serif;
        color: #1a3a32;
        font-weight:600;
    }

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
    const [listDetails, setListDetails] = useState({});

    useEffect(() => {
        getListingDetails()
            .then(res => {
                const {
                    id,
                    listing: {
                        model: {
                            name,
                            brand: {
                                name: brandName
                            },
                            referenceNumber
                        },
                        manufactureYear,
                        condition,
                        images,
                    },
                    salePriceCents,
                    commissionRateBips,
                    sellerFeeCents,
                    payoutAmountCents
                } = res.data

                const imageUrl = images[0]?.image?.url;
                const watchDetails = { id, name, brandName, referenceNumber, manufactureYear, condition, imageUrl, salePriceCents, commissionRateBips, sellerFeeCents, payoutAmountCents }
                setListDetails(watchDetails)

            })
    }, [])
    return (
        <Wrapper>
            <div className='item-img'>
                <img alt="bezel" src={listDetails.imageUrl} />
            </div>
            <div className='item-desc'>
                <span className='breadcrumb'> SHOP / REF 116660 /</span>
                <h1>{listDetails.brandName} {listDetails.name} {listDetails.referenceNumber}</h1>
            </div>
            <div className='overlay'>
                <WatchPopover listDetails={listDetails} />
            </div>
        </Wrapper>
    )
}

export default Order;