import React from 'react'
import classes from './ProgressBar.module.css'
import phaseFullNameMap from '../../../constants/PhaseFullNameMap'

const progressBar = (props) => {
    let phasesBar = []
    for (let i = 0; i < props.phasesTimeline.length; i++) {
        let phase = props.phasesTimeline[i];
        
        let phaseClasses = [classes.Phase]
        if (i === props.currentPhaseIndex) {
            phaseClasses.push(classes.CurrentPhase)
        } else if (i < props.currentPhaseIndex) {
            phaseClasses.push(classes.PreviousPhase)
        }
        
        phasesBar.push(<div key={phase + "_" + i} className={phaseClasses.join(' ')}>{phaseFullNameMap[phase]}</div>)
    }

    return (
        <div style={{margin: "20px"}}>
            {phasesBar}
        </div>       
    );
}

export default progressBar
