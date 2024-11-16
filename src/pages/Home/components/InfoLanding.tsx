import { Box, Paper } from "@mui/material"
import image from "@assets/News_letter.png"
import { CardInfoLanding } from "@components/CardInfoLanding";

export const InfoLanding = () => {
    return (
        <Paper style={{ backgroundImage: `url(${image})` }} sx={{
            marginBottom: '25px', marginTop: '25px',
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
        }}>
            <Box component='div' className="grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 grid-rows-5 gap-8 p-10 " >
                <CardInfoLanding svg={0} text={0} />
                <CardInfoLanding svg={3} text={1} />
                <CardInfoLanding svg={4} text={2} />
                <CardInfoLanding svg={1} text={3} />
                <div className="hidden lg:block"></div>
                <CardInfoLanding svg={2} text={4} />
            </Box>

        </Paper>
    )
}
