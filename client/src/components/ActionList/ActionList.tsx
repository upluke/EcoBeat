import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ActionCard from '../../components/ActionCard';
import HelpDisplay from '../../components/HelpDisplay';
// import SearchBar from '../../components/SearchBar';
import { Typography, Button } from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: '3%'
        },
        brown_paper: {
            padding: theme.spacing(2.3),
            paddingBottom: theme.spacing(3),

            textAlign: 'center',
            //color: theme.palette.text.secondary,
            backgroundColor: 'rgba(164,91,91,.53)',
            borderRadius: '0px 0px 40px 40px',
        },
        green_paper: {
            square: false,
            backgroundColor: 'rgba(218,254,226)',
            borderRadius: '40px 40px 0px 0px',
            // height: '20%',
            padding: theme.spacing(3, 2),
            height: '200',
            // // display: "flex",
            // // flexDirection: "column",
            // justifyContent: "center"
            textAlign: 'center',
            verticalAlign: 'middle',
        },
        add_button: {
            backgroundColor: '#2CF9AC',
            width: '100%',
        },
    }),
);

export interface ActionListInterface {
    helpMessage: string;
    cards: React.ReactElement<typeof ActionCard>[];
    title: string;

}

function returnAddButtonIfRewards(title: string, classes: { [index: string]: string }) {

    if (title === "Rewards") {
        console.log("hello")
        return <Button variant='contained' className={classes.add_button}>Add Item</Button>
    }
}

const ActionList: React.FC<ActionListInterface> = ({ helpMessage, cards, title }) => {
    const classes = useStyles();

    return (
        <Grid item xs={3} className={classes.root}>
            <div style={{ float: 'right', paddingTop: '10px' }}>
                <HelpDisplay helpMessage={helpMessage} />
            </div>
            <Paper className={classes.green_paper} elevation={20} >
                <Typography style={{
                    textAlign: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '8em',
                    fontSize: '1.5em',
                }}> {title} </Typography>
            </Paper>

            <Paper className={classes.brown_paper}>
                {/* <SearchBar></SearchBar> */}
                {returnAddButtonIfRewards(title, classes)}

                <List >
                    {cards.map((card, index) => card)}
                </List>
            </Paper>

        </Grid>

    )
}


export default ActionList