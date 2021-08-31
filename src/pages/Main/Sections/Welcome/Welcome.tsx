import {Label, Sprite, Title} from '../../../../components/atoms'

const Welcome = () => {
  return (
    <>
      <Title tag={'h1'}>Welcome to Race2Restore!</Title>
      <Label tag={'sm'}>This is the landing page of the alpha version!</Label>
      <Label tag={'xs'}>
        Race2Restore is a web-based DeFi car auction application that will let its users vote by contributing funds for
        cars that we restore.
        <br /> Any member can vote with the rest of the community on everything from the car itself, what class of car
        it becomes, and what parts we use to restore it.
      </Label>
      <Label tag={'xs'}>
        In later Rounds, users can mint their choices as non-fungible tokens (NFTs) on the Rarible protocol which can be
        later burned towards the final purchase of the restored vehicle.
      </Label>
      <div style={{display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center', padding: '10px'}}>
        <Sprite id='metamask-icon' width={80} height={80} />
        <Label>Please Make sure you have MetaMask wallet set up.</Label>
      </div>
    </>
  )
}

export default Welcome
