import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Poll from './Polls/Poll';
import testQuery from './DataQuery/TestFetch';
import PollCreating from './PollCreating/PollCreating';

function App() {



      const polls = [
            {
                  name : 'Кто еблан',
                  text : '',
                  options: [
                        {
                              id: 1,
                              optionName: 'я',
                        },

                        {
                              id: 2,
                              optionName: 'ты'
                        },

                  ]
            },

            {
                  name : 'ебейший опрос',
                  text : '123123123123',
                  options: [
                        {
                              id: 3,
                              optionName: 'нет не ебейший'
                        },

                        {
                              id: 4,
                              optionName: 'я еблан'
                        },

                  ]
            },

            {
                  name : 'Poll1',
                  text : 'textPoll',
                  options: [
                        {
                              id: 5,
                              optionName: '123'
                        },

                        {
                              id: 6,
                              optionName: '321'
                        },

                        {
                              id: 7,
                              optionName: '123'
                        },

                        {
                              id: 8,
                              optionName: '123'
                        },

                        {
                              id: 9,
                              optionName: '123'
                        },

                  ]
            },
            
      ]
  return (
    <div className={``}>
      <PollCreating/>
      {polls.map((poll, index)=>{
            return(
                  <Poll poll={poll}/>
            )
      })}
      <button className='button mx-auto d-block' onClick={()=> testQuery()}>Click!</button>
    </div>
  )
}

export default App;
