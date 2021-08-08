import React from 'react'
import NavBar from '../../components/NavBar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ActionList from '../../components/ActionList';
import ActionCard from '../../components/ActionCard';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      //color: theme.palette.text.secondary,
      backgroundColor: 'rgba(164,91,91,.53)'
    },
  }),
);


const RequestCards = [<ActionCard actionDescription="Hello" ecopoints={400} />, <ActionCard actionDescription="wassup" ecopoints={450} />]
const AcceptedCards = [<ActionCard actionDescription="S" ecopoints={0} />]
const RewardCards = [<ActionCard actionDescription="Hello" ecopoints={400} />, <ActionCard actionDescription="wassup" ecopoints={450} />]

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (


    <div className={classes.root}>
      {/* <NavBar loggedIn={true} points={0}/> */}
      {/* This loggedIn property should use a function */}
      {/* That way, when it is false, the User Info (username, coins, etc) will not show. */}

      <Grid container spacing={3} justify="center">

        <ActionList index={0} cards={RequestCards} title='Requests' />
        <ActionList index={1} cards={AcceptedCards} title='Accepted' />
        <ActionList index={2} cards={RewardCards} title='Rewards' />
        {/* These helpMessages should be updated, perhaps taken from some file */}
      </Grid>

    </div >
  )
}

export default HomePage