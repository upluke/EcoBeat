import React from 'react'
import { Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const factList = [
    'Every year, US landfills are filled with 139.6 million tons of waste. This includes food, plastic, paper, and paperboard.',
    'The average American produces 1704 pounds of garbage per year (3 times as much garbage as the global average)',
    'On average, only 9 percent of plastic is recycled. The rest ends up in the landfill.',
    'A typical passenger vehicle in the US emits about 4.6 metric tones of CO2 per year.',
    'For every litre of petrol used by a motor vehicle, an average of 2.4 kg of CO2 is released into the atmosphere.',
    'The most efficient speed you can travel in a car in terms of achieving best fuel economy is 55-65 mph.',
    'Approximately 3.5 – 7 billion trees are cut each year (referenced by RAN – Rainforest Action Network)',
    'The standard pine tree with 45 ft of usable trunk and a diameter of 8 inches will produce 10k sheets of paper',
    'Over the course of 25 years, a maple tree can store about 400 pounds of carbon dioxide.',
    'Ozone depletion occurs when Chlorofluorocarbons (CFCs) an halons (gases found in aerosol spray cans and refrigerants) are released into the atmosphere',
    'The Ozone layer in our atmosphere absorbs ultraviolet radiation, preventing dangerous UV rays from hitting Earth’s surface and harming living organisms (UV rays can change the chemical structure of molecules, making them very dangerous for all living things). ',
    'UV rays can cause various types of health problems, including eye damage and skin cancer.',
    'Most residential solar panels in today’s market produce between 250-400 watts per hour. This amount of power can recharge small devices and keep your toilet fan running 24/7',
    'Replace incandescent lightbulbs with  CFLs and LEDs for longer lasting, more energy-efficient light. It’s a great way to save on your electrical bill',
    'Did you know, the average charger consumes 0.26 watts of energy when not in use? Collectively, these “energy vampires” contribute to 10% of your energy bill. Unplug them when you’re not using them.'
]

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            fontSize: '1em',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            margin: 'auto'
        },
    }),
);

const RandomFact: React.FC = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.root}>
            {factList[Math.floor(Math.random() * factList.length)]}
        </Typography >
    )
}

export default RandomFact