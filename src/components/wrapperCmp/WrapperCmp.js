import Logo from "../logo/Logo";
import ToggleButton from "../toggleButton/ToggleButton";
import City from "../city/City";
import CurrentTemp from "../currentTemp/CurrentTemp";
import ShortSummary from "../shortSummary/ShortSummary";
import HighLowTemp from "../highLowTemp/HighLowTemp";
import Summary from "../summary/Summary";

import "./wrapperCmp.css";

const WrapperCmp = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Logo />
                        </div>
                        <div className="col-lg-6">
                            <ToggleButton />
                        </div>
                    </div>

                    <div className="content mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="left-content">
                                        <City />
                                        <ShortSummary />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <CurrentTemp />
                                    <HighLowTemp />
                                    <Summary />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WrapperCmp;
