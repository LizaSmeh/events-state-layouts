import { products } from '../data/productsStore.js';
import { IconSwitch } from './IconSwitch.jsx';
import { CardsView } from './CardsView.jsx';
import { ListView } from './ListView.jsx';
import { useState } from 'react';


export const Store = () => {
  const [icon, setIcon] = useState('view_list');
  const module = icon === 'view_module';
  const onSwitch = () => {
    setIcon(() => {
      if (module) {
        return 'view_list';
      }
      return 'view_module'
    })
  };

  return (
    <>
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            {module ? <CardsView cards={products}/> : <ListView items={products}/>}
        </>
  )
}

