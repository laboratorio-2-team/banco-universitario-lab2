import { Container, Paper } from "@mui/material"
import imagen from "@assets/News_letter.png"
import { CardInfoLanding } from "@components/CardInfoLanding";

export const InfoLanding = () => {
    return (
        <Paper className='w-screen' style={{ backgroundImage: `url(${imagen})` }} sx={{ marginLeft: 'calc(50% - 50vw)', marginBottom: '25px', marginTop: '25px',
            backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat'
         }}>
            <Container style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
                <CardInfoLanding svg={0} text={0} />
                <CardInfoLanding svg={3} text={1} color="#085F63" textColor="white" />
                <CardInfoLanding svg={4} text={2} />
            </Container>
            <Container style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
                <CardInfoLanding svg={1} text={3} />
                <div></div>
                <CardInfoLanding svg={2} text={4} />
            </Container>
        </Paper>
    )
}
