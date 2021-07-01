import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { DataType } from '../types/types';
import css from './header-info.module.css'

const HeaderInfo: React.FC<{dataCard: DataType}> = ({dataCard}) => {
    const everyTitle = []
    for (let key of Object.keys(dataCard.sets)) {
        everyTitle.push(key)   
    }
    const createRows = everyTitle.map((item) => { 
        return (
            <NavLink className={css.link} to={item}>
                <div className={css.row} key={item}>{item}</div> 
            </NavLink>
        )
        
    })
    return (
        <div className={css.main}>
            <NavLink className={css.link} to='/Sets'>
                <div className={css.row}>Menu</div>
            </NavLink>
            {createRows}
            <NavLink className={css.link} to='/Statistics'>
                <div className={css.row}>Statistics</div>
            </NavLink>
        </div>
    )
}
export default HeaderInfo