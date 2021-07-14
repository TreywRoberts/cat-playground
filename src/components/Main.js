import React from 'react'

import { StyledMain }  from '../styles/StyledMain'

function Main({background, cursor}){
   

    console.log(cursor)

    return(
        <StyledMain background={background} cursor={cursor}>
        <div className='main'>

        </div>
        </StyledMain>
    )
}

export default Main