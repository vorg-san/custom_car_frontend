import {Title, Label} from '../../../../components/atoms'
import classes from '../../Vote.module.scss'

const Statistics = () => {
  return (
    <div className={`${classes.statistics}`}>
      <Title tag={'h1'} style={{textDecoration: 'underline', textAlign: 'center'}} racingFont>
        Race Statistics
      </Title>
      <div className={`${classes.statsDetails}`}>
        <div className={`${classes.column}`}>
          <img src={'assets/images/2013scionfrs.png'} style={{width: '100%'}} />
          <Label style={{marginTop: 'auto', fontStyle: 'italic'}} tag={'sm'}>
            2013 Scion FRS
            <br />
            Lead the Race to Restore
          </Label>
        </div>
        <div className={`${classes.column}`}>
          <Label tag={'xl'} style={{display: 'block'}}>
            2.39
          </Label>
          <Label tag={'sm'} style={{marginTop: 'auto', display: 'block', fontStyle: 'italic'}}>
            Total amount of Eth spent on paint jobs
          </Label>
        </div>
        <div className={`${classes.column}`}>
          <img src={'assets/images/scion_drift3.jpg'} style={{width: '100%'}} />
          <Label style={{marginTop: 'auto', fontStyle: 'italic'}} tag={'sm'}>
            Top Voted Class
          </Label>
        </div>
        <div className={`${classes.column}`}>
          <Label tag={'xl'} style={{display: 'block'}}>
            23
          </Label>
          <Label tag={'sm'} style={{marginTop: 'auto', display: 'block', fontStyle: 'italic'}}>
            Total # of NFts Minted on Rarible
          </Label>
        </div>
      </div>
    </div>
  )
}

export default Statistics
