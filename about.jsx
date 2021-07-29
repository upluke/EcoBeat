import React from 'react';
import Box from '@material-ui/core/Box';

/*const text = [
    {
        title1: "How to Play?",
        title2: "Who we are:",
        cont1: "Simply click and drag a task from the “Request” section of your homepage to claim it. To unclaim it, just drag it back in requests. When you’ve completed the task, click, and drag it to the “Done” section of the webpage. You may see your earnings in the top right corner underneath your username. Your hard-earned coins can be exchanged for title rewards in our rewards section.",
        cont2: "This project serves as an incentive to motivate various individuals to become more environmentally aware. We’re a small group of individuals looking to turn this learning process into a fun experience. We plan on having redeemable rewards as a trade-in for completed tasks. These tasks pertain to lowering our environmental footprint including- proper recycling, composting, reducing our energy consumption, and being conscious of all that we waste.",
    },
]

function titleBox () {
    return (
    <Box component = "1"
        sx={{
            width: "40%",
            height: "10%",
            fontSize: 32,
            display: "flex",
            bgcolor: "#DAFEE2",
            contrastText:"000000",
            flexDirection: "row",
            flexWrap: "wrap", 
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            m : 2,
        }}
    >
    text.title1
    </Box>
    )
};

function contentBox ({text2}) {
    return (
        <Box
            sx={{
                width: "40%",
                height: "60%",
                fontSize: 24,
                display: "flex",
                bgcolor: "#A45B5B",
                contrastText:"#EBEBEB",
                flexDirection: "row",
                flexWrap: "wrap", 
                justifyContent: "center",
                alignItems: "center",
                padding: "5px",
                m : 12,

            }}
        >
        text.cont1
        </Box>
    )
};*/

export function Aboutpage(props) {
    return (
        <Box bgcolor= "#113537">
            <div style={{
                width:"40%", 
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                float:"left", 
                color: 'black',   
                borderStyle: "solid", 
                borderColor: "#DAFEE2", 
                borderRadius: "5px", 
                backgroundColor: "#DAFEE2", 
                textAlign: "center",
                marginTop: "200px",
                flexGrow: 3,
                fontSize: 36,
                marginInlineStart: "50px",
                }}>
                How to play?
            </div>
            <div style={{
                width:"40%", 
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                float:"right", 
                color:'black', 
                borderStyle: "solid", 
                borderColor: "#DAFEE2", 
                borderRadius: "5px", 
                backgroundColor: "#DAFEE2", 
                marginTop: "200px",
                flexGrow: 3,
                fontSize: 36,
                marginInlineEnd: "50px",
                }}>
                Who we are:
            </div>
            <div style={{
                width:"40%", 
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                float:"left", 
                color: "#EBEBEB",   
                borderStyle: "solid", 
                borderColor: "#A45B5B", 
                borderRadius: "5px", 
                backgroundColor: "#A45B5B", 
                alignContent: "space-around",
                flexGrow: 3,
                marginInlineStart: "50px",
                }}>
                Simply click and drag a task from the “Request” section of your homepage to claim it. To unclaim it, just drag it back in requests. When you’ve completed the task, click, and drag it to the “Done” section of the webpage. You may see your earnings in the top right corner underneath your username. Your hard-earned coins can be exchanged for title rewards in our rewards section.
            </div>
            <div style={{
                width:"40%", 
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                float:"right", 
                color: "#EBEBEB",   
                borderStyle: "solid", 
                borderColor: "#A45B5B", 
                borderRadius: "5px", 
                backgroundColor: "#A45B5B", 
                alignContent: "space-around",
                flexGrow: 3,
                marginInlineEnd: "50px",
                }}>
                This project serves as an incentive to motivate various individuals to become more environmentally aware. We’re a small group of individuals looking to turn this learning process into a fun experience. We plan on having redeemable rewards as a trade-in for completed tasks. These tasks pertain to lowering our environmental footprint including proper recycling and being conscious of our waste.
            </div>  
            <div style={{marginTop:"10", color: "#EBEBEB"}}>Use cold water when doing your laundry loads. It helps cut down on 90% of the energy your washer uses to run a load</div>
        </Box>)       
}