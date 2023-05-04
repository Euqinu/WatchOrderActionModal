import axios from "axios";

export const getListingDetails = () => {
    return (
        axios.get('https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123')
    )
}

export const userDecision = (id,status) => {
    return (
        axios.post(`https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/${id}/${status}`)
    )
}