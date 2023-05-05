import "bootstrap/dist/css/bootstrap.min.css";

function PollOption(props) {
      
      return(
            <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id={props.optionData.id}/>
                  
                  <label className={"form-check-label w-auto d-block"} htmlFor={props.optionData.id}>
                  {props.optionData.optionName}
                  </label>
            </div>
            );
}

export default PollOption;