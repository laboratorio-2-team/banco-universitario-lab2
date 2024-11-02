import { Grid, Paper } from "@mui/material"
import imagen from "@assets/News_letter.png"
import { CardInfoLanding } from "@components/CardInfoLanding";

export const InfoLanding = () => {
    return (
        <Paper className='w-full' style={{ backgroundImage: `url(${imagen})` }} sx={{ marginLeft: 'calc(50% - 50vw)', marginBottom: '25px', marginTop: '25px' }}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <CardInfoLanding svg={0} text={0} />
                </Grid>
                <Grid item xs={4}>
                    <CardInfoLanding svg={3} text={1} color="#c4dfe0" textColor="white" />
                </Grid>
                <Grid item xs={4}>
                    <CardInfoLanding svg={4} text={2} />
                </Grid>
                <Grid item xs={4}>
                    <CardInfoLanding svg={1} text={3} />
                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                    <CardInfoLanding svg={2} text={4} />
                </Grid>
            </Grid>
        </Paper>
    )
}