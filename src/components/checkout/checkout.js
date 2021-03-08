import { Typography } from "@material-ui/core";
import Address from "./address"
import DeliveryEstimates from "./delivery-estimates"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Checkout = () => {
    return ( 
        <div>
            <Typography variant="h5" component="h5" align="left">
            <ArrowBackIosIcon /> Checkout
            </Typography>
            <Address />
            <Address />
        </div>
     );
}
 
export default Checkout