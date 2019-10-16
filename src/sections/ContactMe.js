import React from 'react'
// import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import WidthContainer from '../WidthContainer'

const useStyles = makeStyles(theme => ({
  section: {
    // backgroundColor: '#fff',
    // padding: '40px 50px',
    // boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
    // height: 500
  }
}))

const Home = () => {
  const classes = useStyles()

  return (
    <WidthContainer>
      <section id="contactMe">
        <div className={classes.section}>
          <Typography variant="h5">Contact Me</Typography>
          <Typography>
            {' '}
            Carefully drink from water glass and then spill it everywhere and proceed to lick the
            puddle lick the other cats hey! you there, with the hands but always hungry check cat
            door for ambush 10 times before coming in for jump off balcony, onto stranger's head but
            hit you unexpectedly. It's 3am, time to create some chaos ptracy eat plants, meow, and
            throw up because i ate plants run as fast as i can into another room for no reason but
            need to chase tail. Love me! it's 3am, time to create some chaos . Need to check on
            human, have not seen in an hour might be dead oh look, human is alive, hiss at human,
            feed me stare at ceiling decide to want nothing to do with my owner today i vomit in the
            bed in the middle of the night but meow to be let out. Cats secretly make all the worlds
            muffins furrier and even more furrier hairball so wake up wander around the house making
            large amounts of noise jump on top of your human's bed and fall asleep again, and chase
            laser lick left leg for ninety minutes, still dirty. Always hungry trip owner up in
            kitchen i want food, so claw drapes do not try to mix old food with new one to fool me!,
            cats are the world yet let me in let me out let me in let me out let me in let me out
            who broke this door anyway .{' '}
          </Typography>
        </div>
      </section>
    </WidthContainer>
  )
}

export default Home
