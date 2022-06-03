import "./dashboard.scss"
import card from "../assets/card.png";

const DashUp = () => {
    return ( 
        <div>
            <div className="card-dash" >
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 d-none d-sm-block  svg-background">
                        
                            </div>
                        <div className="col-md-6 col-12 dash-up-right" >
                            <p>20% Safe On Your First Account</p>
                            <div className="btn-row">
                            <button>NEWBIE20</button>
                            <p id="copy-code">Copy Code</p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default DashUp;