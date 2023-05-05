import "bootstrap/dist/css/bootstrap.min.css";
import PollOption from "./PollOptions";

function Poll(props) {
      /* Define poll components from props */
      const poll = props.poll;
      const pollName = poll.name;
      const pollText = poll.text;
      const pollOptions = poll.options;
      

      return(
            <form className={`flex-column mx-auto card my-5`} style={{width: "40%"}}>
            
                  <div className={`card-body`}>
                        <h5 className={`text-center card-title`}>{pollName}</h5> 
                        <p className={`text-center card-text`}>{pollText}</p>

                        {pollOptions.map((option, index) => {
                              return (
                                    <PollOption optionData = {option} index= {index}/>
                              );
                        })}
                  </div>
            </form>
      )
}

export default Poll;