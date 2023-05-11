import { useState } from "react";
import PollOptionCreate from "./PollOptionCreate";
import $ from 'jquery';


function PollCreating() {
      
      // TODO: change option adding algorithm
      const [options, setOptions] = useState([0]);

      function addOption() {
            setOptions([...options, options.length]);
      }
      
      function sendFormData(){
            $('.createPoll', () => {

                  // TODO: change option adding algorithm (adding option by enter click (всегда появляется одно поле для ответа после нажатия enter можно вводить следующее значение))

                  var Poll = {
                        poll_id: 0,
                        poll_name: $('#poll_title').val(),
                        poll_text: $('#poll_text').val(),
                        poll_options:
                              options.map((i) => {
                                    return $("#poll_option_" + i).val();
                              })
                  };
                  
                  alert(Poll)

                  //TODO: need to fix cookies from server not accepted by the client
                  $.ajax({
                        type: "POST",
                        url: 'http://localhost:8000?r=poll/createpoll',
                        data: JSON.stringify(Poll),
                        // headers:{
                        //       'Cookie' : document.cookie,

                        // },
                        success: (data)=> alert(data.message),
                        error: (errMsg)=>alert(errMsg)
                        }
                  );
            })
      }

      //TODO: add cookie to access
      function deletePoll() {
            $.ajax({
                  type: "DELETE",
                  url: 'http://localhost:8000?r=poll/deletepoll&id=27',
                  headers:{
                        'Cookie' : document.cookie,
                        
                  },
                  success: (data)=> alert(data.message),
                  error: (errMsg)=>alert(errMsg)
                  }
            );
      }
      
      return(
            <div>
                  <form className={`createPoll flex-column mx-auto card my-5`} style={{width: "40%"}}>
                        <div className={`card-body`}>
                              <h2>Poll title: <input className="form-check-input w-auto h-auto" type="text" id="poll_title"/></h2>

                              <button type="button" className="createOption btn btn-primary d-inline-block" onClick={addOption}>+</button>
                              <h2>Poll text: <input className="form-check-input w-auto h-auto" type="text" id="poll_text"/></h2> 
                              <div className="Options">
                              
                              {options.map((i)=>{
                                    return <PollOptionCreate index={i}/>
                              })}
                              </div>
                              <button type="button" onClick={sendFormData} className="submit-form btn btn-primary">Создать</button>
                        </div>
                  </form>
                  <button type="button" onClick={deletePoll} className="delete_poll submit-form btn btn-primary">delete</button>
            </div>
      );
}

export default PollCreating;