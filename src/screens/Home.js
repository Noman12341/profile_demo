import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import profileImg from '../images/profile.jpg';
import twitter from '../images/twitter.png';
import insta from '../images/instagram.jpg';
import tiktok from '../images/tiktok.png';
import youtube from '../images/youtube.png';

import { Link } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#f7f7f7',
        minHeight: '100vh',
        padding: theme.spacing(5, 0)
    }, mainPaper: {
        padding: theme.spacing(2),
        boxShadow: theme.shadows[10]
    }, headingBox: {
        backgroundColor: theme.palette.success.main,
        textAlign: 'center',
        padding: theme.spacing(3),
        '& > h1': {
            fontSize: theme.spacing(3),
            fontWeight: 'bold',
            color: theme.palette.common.white
        }
    }, profileFlex: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        gap: 20
    }, img: {
        display: 'flex',
        height: 70,
        width: 70,
        borderRadius: '50%'
    }, userName: {
        fontSize: theme.spacing(2),
        fontWeight: 'bold'
    }, linksBoxFlex: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        gap: 20,
        marginBottom: theme.spacing(2)
    }, mediaLink: {
        fontSize: theme.spacing(2),
        fontWeight: 'bold',
        color: theme.palette.common.black
    }, iconBox: {
        height: 70,
        width: 70,
        borderRadius: '50%',
        color: theme.palette.primary.main,

    }
}))
function Home() {
    const classes = useStyles();

    return <Box className={classes.root}>
        <Container>
            <Box classname={classes.mainPaper}>
                <Box className={classes.headingBox}>
                    <Typography component="h1">Lorem Ipsum</Typography>
                </Box>
                <Box>
                    <Grid container spacing={3}>
                        <Grid item lg={4}>
                            <Paper style={{ margin: "20px 0", padding: "20px" }}>
                                <Box className={classes.profileFlex}>
                                    <img className={classes.img} src={profileImg} alt="" />
                                    <Box>
                                        <Typography component="h4" className={classes.userName}>User Name</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item lg={8}>
                            <Paper style={{ margin: "20px 0", padding: "20px" }}>
                                <Box className={classes.linksBoxFlex}>

                                    <img className={classes.img} src={twitter} alt="" />
                                    <Box><Link className={classes.mediaLink} href="/">www.tiktok.com</Link></Box>
                                </Box>
                                <Box className={classes.linksBoxFlex}>

                                    <img className={classes.img} src={youtube} alt="" />
                                    <Box><Link className={classes.mediaLink} href="/">www.youtube.com</Link></Box>
                                </Box>
                                <Box className={classes.linksBoxFlex}>

                                    <img className={classes.img} src={insta} alt="" />
                                    <Box><Link className={classes.mediaLink} href="/">www.instagram.com</Link></Box>
                                </Box>
                                <Box className={classes.linksBoxFlex}>

                                    <img className={classes.img} src={tiktok} alt="" />
                                    <Box><Link className={classes.mediaLink} href="/">www.tiktok.com</Link></Box>
                                </Box>

                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </Box>
}
export default Home;