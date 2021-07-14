import React, {useState} from 'react';

import './App.css';
import MenuChoice from './components/Menu'
import Main from './components/Main'
function App() {

  const [background, setBackground] = useState('forest')
  const [cursor, setCursor] = useState('squirrel')

  const onClickOcean = () =>{
    setBackground('ocean')
}
const onClickForest = () =>{
    setBackground('forest')
}
const onClickSky = () =>{
  setBackground('sky')
}
const onClickHH = () =>{
  setBackground('hauntedHouse')
}
const onClickFish = () =>{
  setCursor('fish')
}
const onClickCat = () =>{
  setCursor('cat')
}
const onClickBird = () =>{
  setCursor('bird')
}
const onClickSquirrel = () =>{
  setCursor('squirrel')
}
const onClickGhost = () =>{
  setCursor('Ghost')
}
// console.log(background)


  return (
    <div>
    <MenuChoice background={background} onClickForest={onClickForest} onClickOcean={onClickOcean}
    onClickCat={onClickCat} onClickFish={onClickFish} onClickBird={onClickBird}
    onClickSky={onClickSky} onClickSquirrel={onClickSquirrel} onClickGhost={onClickGhost} 
    onClickHH={onClickHH} />
    <Main background={background} cursor={cursor} />
    </div>
  );
}

export default App;
