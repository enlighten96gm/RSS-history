import React from 'react';
import css from './sets.module.css'
import SingleSet from './singleSet';

const Sets = ({ dataCard, mainFlag}: any) => {
    const entriesArray = []
    for (let key of Object.entries(dataCard.sets)) {
        entriesArray.push(key)
    }
    const singleSet = entriesArray.map((item: any) => { return (
    <SingleSet key={item.key} item={item} mainFlag={mainFlag}/>
    )})
  return (
    <div className={css.sets}>
        {singleSet}
    </div>
  )
}

export default Sets;
