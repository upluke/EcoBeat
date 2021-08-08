import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    input: {
        backgroundColor: '#F4F4F4',
        fontColor: '#6A6A6A',
        width: '99%',
        fontSize: '1.1vw',
        paddingTop: '.5%',
        paddingBottom: '.5%',
    },
    form: {
        paddingTop: '2.5%',
        // paddingBottom: '3%'
    }

}));

const SearchBar: React.FC = () => {
    // Needs to be setup. And not sure if this should just go directly in ActionList or be its own component.
    const classes = useStyles();
    return (
        <form action="/" method="get" className={classes.form} >
            <input
                type="text"
                id="header-search"
                placeholder=" Search"
                name="s"
                className={classes.input}
            />
        </form>
    )
}

export default SearchBar