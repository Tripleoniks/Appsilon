import { ProgressBar } from "@progress/kendo-react-progressbars"

const DashDown = () => {

    const data = [
        {
            title: "Total Value of Disbursement",
            price: 1000,
            policy:  400,
            claim: 800
        },
        {
            title: "Total Value of Disbursement",
            price: 2500,
            policy: 1100,
            claim: 1400
        },
        {
            title: "Total Value of Disbursement",
            price: 2500,
            policy:  1100,
            claim: 1400
        },
    ]




    return ( 
        <div className="dash-down">
            <div className="dash-down-content row">
                {data.map((item, index) => {
                    const { title, price, policy, claim } = item;
                    const policyPercent = (policy / price) * 100;
                    const claimPercent = (claim / price) * 100;
                    return (
                        <div className="card col-md-4" key={index}>
                            <p id="amount-details">{price} <span className="lower_sign">$</span> </p>
                           <p>{title}</p>
                           <div className="amount-details-div">
                          <div className="row">
                         <label className="col-md-6 col-6 pol-label" >policy</label>
                           <label  className="col-md-6 col-6" style={{textAlign: "end"}}>{policy}<span className="lowest_sign">$</span></label>
                          </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${policyPercent}%` }} aria-valuenow={policy} aria-valuemin="0" aria-valuemax={price}></div>
                            </div>
                         </div>
                         <div className="amount-details-div">
                          <div className="row">
                         <label className="col-md-6 col-6 pol-label" >Claim</label>
                           <label  className="col-md-6 col-6" style={{textAlign: "end"}}>{claim}<span className="lowest_sign">$</span></label>
                          </div>
                            <div className="progress">
                                <div className="progress-bar2" role="progressbar" style={{ width: `${claimPercent}%` }} aria-valuenow={policy} aria-valuemin="0" aria-valuemax={price}></div>
                            </div>
                         </div>
                         
                            
                        </div>
                    )
                })
                }

                </div>
            </div>
     );
}
 
export default DashDown;

