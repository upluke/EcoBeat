import React from 'react'
import NavBar from '../../components/NavBar';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
        marginTop: 20
    },
    cardTitle: {
        width: '40%',
        backgroundColor: '#DAFEE2',
        position: 'relative'

    },
    content: {
        width: '100%',
        backgroundColor: 'rgba(164, 91, 91, 0.95)',
    },
    contText: {
        textAlign: 'justify',
        marginTop: 12,
        width: '91%',
        padding: '5%',
        color: '#EBEBEB',
        fontSize: 19

    },
})



const AboutPage: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <NavBar loggedIn={false} points={0} loginUser={""} />
            <Box
                bgcolor="#113537"
                className={classes.flexColumn}
                style={{ width: '100%', height: '100vh', justifyContent: 'space-around', }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Card className={`${classes.flexColumn} ${classes.cardTitle}`}>

                        <div className={classes.title}>
                            How to play?
                        </div>
                        <div className={`${classes.flexColumn} ${classes.content} ${classes.contText}`} style={{ flex: 2 }}>
                            Simply click and drag a task from the "Request" section of your homepage to claim it. To unclaim it, just drag it back in requests. When you've completed the task, click, and drag it to the "Done" section of the webpage. You may see your earnings in the top right corner underneath your username. Your hard-earned coins can be exchanged for title rewards in our rewards section.
                        </div>

                    </Card>
                    <Card className={`${classes.flexColumn} ${classes.cardTitle}`}>

                        <div className={classes.title}>
                            Who we are:
                        </div>
                        <div className={`${classes.flexColumn} ${classes.content} ${classes.contText}`} style={{ flex: 2 }}>
                            This project serves as an incentive to motivate various individuals to become more environmentally aware. We're a small group of individuals looking to turn this learning process into a fun experience. We plan on having redeemable rewards as a trade-in for completed tasks. These tasks pertain to lowering our environmental footprint including proper recycling and being conscious of our waste.
                        </div>

                    </Card>
                </div>
                <div style={{ margin: '20px auto', backgroundColor: '#113537', color: '#EBEBEB', fontSize: 24 }}>
                    <p>**Use cold water when doing your laundry loads. It helps cut down on 90% of the energy your washer uses to run a load.**</p>
                </div>
            </Box>
        </div>
    )
}

export default AboutPage