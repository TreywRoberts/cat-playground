import React from 'react'

import {StyledMenu} from './../styles/StyledMenu'


function MenuChoice({onClickForest, onClickHH, onClickOcean, onClickFish, onClickCat, onClickBird,
onClickSky, onClickSquirrel, onClickGhost}){


    
    // console.log(background)
    
    return(
        <StyledMenu >

        <div className='dropdown'>
            <button className='dropbtn'>Background</button>
            <div className='dropdown-content'>
                <button onClick={onClickForest}>Forest</button>
                <button onClick={onClickOcean}>Ocean</button>
                <button onClick={onClickSky}>Sky</button>
                <button onClick={onClickHH}>Haunted House</button>
            </div>
        </div>
        <div className='dropdown'>
            <button className='dropbtn'>Cursor</button>
            <div className='dropdown-content'>
                <button onClick={onClickFish}>Fish</button>
                <button onClick={onClickCat}>Cat</button>
                <button onClick={onClickBird}>Bird</button>
                <button onClick={onClickSquirrel}>Squirrle</button>
                <button onClick={onClickGhost}>Ghost</button>

            </div>
        </div>
        </StyledMenu>
    )


}

export default MenuChoice