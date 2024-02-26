import React from 'react'

function Progress({progress}) {
    // const Parentdiv = {
    //     height: "5px",
    //     width: '50%',
    //     backgroundColor: 'black',
    //     borderRadius: 40,
    //     // margin: 50
    //   }
     
      const Childdiv = {
        width: `${progress}%`
        // textAlign: 'right'
      }
     
    //   const progresstext = {
    //     padding: 10,
    //     color: 'black',
    //     fontWeight: 900
    //   }
       
    return (
    <div className='h-[6px] w-[38%] bg-gray-300 rounded-[40px] mt-1 ml-[6px] '>
      <div style={Childdiv} className={`h-full bg-orange-400 rounded-[40px]`}>
        {/* <span style={progresstext}>{`${progress}%`}</span> */}
      </div>
    </div>
    )
}

export default Progress
