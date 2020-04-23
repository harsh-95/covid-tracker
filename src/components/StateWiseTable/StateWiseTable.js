import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import { fetchStateWiseDetails } from '../../api';

import styles from './StateWiseTable.module.css';

const StateWiseTable = () => {

    const[stateWise, setStateWise] = useState([]);

    useEffect(() =>{
        const fetchApi = async () => {
            const {data: {statewise}} = await fetchStateWiseDetails();
            console.log(statewise);
            setStateWise(statewise);
        }
        fetchApi();
    },[])

    const totalCasesHeader = (
        <div>
            {stateWise.map(({state, confirmed, active, recovered, deaths, deltaconfirmed, deltarecovered, deltadeaths},i) => 
                                    state === "Total" ?
                                    (<div className={styles.header} key={i}>
                                        <div className={cx(styles.label, styles.confirmed)}>
                                            <div>Confirmed</div>
                                            <div>▲{deltaconfirmed}</div>
                                            <div>{confirmed}</div>
                                        </div>
                                        <div className={cx(styles.label, styles.active)}>
                                            <div>Active</div>
                                            <div></div>
                                            <div>{active}</div>
                                        </div>
                                        <div className={cx(styles.label, styles.recovered)}>
                                            <div>Recovered</div>
                                            <div>▲{deltarecovered}</div>
                                            <div>{recovered}</div>
                                        </div>
                                        <div className={cx(styles.label, styles.deaths)}>
                                            <div>Deaths</div>
                                            <div>▲{deltadeaths}</div>
                                            <div>{deaths}</div>
                                        </div>
                                     </div>)
                                    : null
                                    )}
        </div>
        );

    const stateWiseTable = (
        <table cellSpacing="5px">
            <thead>
                <tr>
                    <th className={styles.left}>State/UT</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deceased</th>
                </tr>
            </thead>
            <tbody>
                {stateWise.map(({state, confirmed, active, recovered, deaths, deltaconfirmed, deltarecovered, deltadeaths},i) => 
                            state !== "Total" ?
                            (<tr key={i}>
                                <td className={styles.left}>
                                    {state}
                                </td>
                                <td className={styles.right}>
                                    <span className={cx(styles.delta, styles.confirmed)}>
                                        {deltaconfirmed !== "0" ? "▲"+deltaconfirmed: null}
                                    </span>
                                    <span>{confirmed}</span>
                                </td>
                                <td className={styles.right}>
                                    <span>{active}</span>
                                </td>
                                <td className={styles.right}>
                                    <span className={cx(styles.delta, styles.recovered)}>
                                        {deltarecovered !== "0" ? "▲"+deltarecovered: null}
                                    </span>
                                    <span>{recovered}</span>
                                </td>
                                <td className={styles.right}>
                                    <span className={cx(styles.delta, styles.deaths)}>
                                        {deltadeaths !== "0" ? "▲"+deltadeaths: null}
                                    </span>   
                                    <span>{deaths}</span>
                                </td>
                            </tr>)
                            : null
                            )}
                
            </tbody>
        </table>
);

return(
    <div className={styles.container}>
        {totalCasesHeader}
        <div className={styles.center}>State wise Cases (India)</div>
        {stateWiseTable}
    </div>
);

}
export default StateWiseTable;