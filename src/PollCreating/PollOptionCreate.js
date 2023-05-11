

function PollOptionCreate(props) {
      return(
            <div>
                  <h2>Option name: <input className="form-check-input w-auto h-auto" type="text" id={"poll_option_" + props.index}/></h2>
            </div>
      );
}

export default PollOptionCreate;