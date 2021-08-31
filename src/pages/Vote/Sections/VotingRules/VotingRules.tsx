import {Title, Label} from '../../../../components/atoms'
import classes from '../../Vote.module.scss'

const VotingRules = () => {
  return (
    <div className={`${classes.votingRules}`}>
      <Title tag={'h1'} racingFont>
        Voting Rules:
      </Title>
      <ul>
        <li>
          <Label tag={'sm'}>
            Vote to contribute to a restoration of a car! The final restored car is available for auction during the
            Final Round.
          </Label>
        </li>
        <li>
          <Label tag={'sm'}>
            A car is on the Race2Restore auction for a week {<span style={{fontWeight: 'bold'}}>(7 days)</span>}
          </Label>
        </li>
        <li>
          <Label tag={'sm'}>
            You can contribute {<span style={{fontWeight: 'bold'}}>ETH</span>} to any part of the car restoration
            project;
          </Label>
        </li>
        <li>
          <Label tag={'sm'}>
            If your vote does not make it to later rounds your funds will be returned to your wallet
          </Label>
        </li>
      </ul>
    </div>
  )
}

export default VotingRules
