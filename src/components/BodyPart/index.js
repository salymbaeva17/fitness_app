import React from 'react';
import {Stack, Typography} from "@mui/material";
import icon from '../../assets/icons/gym.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
    return (
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({
                    top: 1800,
                    left: 100,
                    behavior: "smooth"
                })
            }}
        >
            <img
                src={icon}
                alt="dumbbell"
                style={{
                    width: '40px',
                    height: '40px'
                }}
            />
            <Typography
                fontSize='24px'
                fontWeight={700}
                color='#3a1212'
                textTransform='capitalize'
            >
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;