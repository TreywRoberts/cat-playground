import styled from 'styled-components'

import cat from './../images/cat2.png'
import fish from './../images/fish3.png'
import bird from './../images/bird2.png'
import squirrel from './../images/squirrel2.png'
import ghost from './../images/ghost2.png'
import forest from './../images/forest-web.jpg'
import ocean from './../images/ocean.jpg'
import sky from './../images/sky2.jpg'
import HH from './../images/hauntedHouse.jpg'

export const StyledMain = styled.div`
    background: ${props => (props.background === 'forest' ? `url(${forest}) #000` 
    : props.background === 'ocean' ? `url(${ocean})` 
    : props.background === 'sky' ? `url(${sky})` : `url(${HH})` )};
    background-size: cover;
    height: 100vh;
    cursor: ${props => (props.cursor === 'fish' ? `url(${fish})` 
    : props.cursor ==='cat' ? `url(${cat})` : props.cursor === 'squirrel' 
    ? `url(${squirrel})` : props.cursor ==='bird' ? `url(${bird})` 
    : `url(${ghost})` )}, auto;
` 
