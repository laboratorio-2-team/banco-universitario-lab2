import { Paper, Typography, Box } from "@mui/material"
import image from "@assets/thought-catalog-23KdVfc395A-unsplash.png"
import v6 from "@assets/v6.svg"
import { CardLanding } from "@components/CardLanding"
import { useTheme } from "styled-components"

import v1 from '@assets/v1.svg'
import v2 from '@assets/v2.svg'
import v3 from '@assets/v3.svg'
import v4 from '@assets/v4.svg'
import v5 from '@assets/v5.svg'

export const WelcomeLanding = () => {
    const theme = useTheme();
    const stylefont: React.CSSProperties = { fontFamily: theme.typography.fontFamily, color: '#053436', fontSize: '22px', fontWeight: 500 };
    const stylefont1: React.CSSProperties = { fontFamily: theme.typography.fontFamily, color: 'black', fontSize: '2rem', fontWeight: 'bold' };


    const cardsList = [
        {
            text: 'Transferencias entre Estudiantes',
            svg: v1
        },
        {
            text: 'Retiros en Efectivo',
            svg: v2
        },
        {
            text: 'Depósitos en Efectivo',
            svg: v3
        },
        {
            text: 'Pago de Matrícula Estudiantil',
            svg: v4
        },
        {
            text: 'Cobro de Becas de Estudiantiles',
            svg: v5
        },
    ]

    return (
        <Paper style={{
            backgroundImage: `url(${image})`, backgroundSize: 'cover',
            backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        }}>
            <Box component='div' className="py-20 px-[15%]" >
                <Box component={'div'} className="flex flex-col justify-center items-start mb-8">
                    <Box component='div' className="flex flex-row items-center ml-[-1rem]">
                        <img src={v6} />
                        <Typography component='p' className="text-primary-main text-xl font-semibold" style={stylefont}>
                            Bienvenido al Banco Universitario
                        </Typography>
                    </Box>
                    <Box component='div'>
                        <Typography style={stylefont1}>
                            Empieza tu educación
                        </Typography>
                        <Typography style={stylefont1}>
                            Financiera Hoy
                        </Typography>
                    </Box>
                </Box>
                <Box component={'div'} className="flex  flex-row justify-between flex-wrap">

                    {
                        cardsList.map(({ svg, text }) => (
                            <CardLanding key={text} svg={svg} text={text} />
                        ))
                    }

                </Box>
            </Box>
        </Paper>
    )
}
