import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {fetchData, exerciseOptions} from "../../utils/fetchData";
import HorizontalScrollbar from "../HorizontalScrollbar";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercisesData()
    }, [])
    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
            console.log(exercisesData)
            // eslint-disable-next-line array-callback-return
            const searchedExercises = exercisesData.filter(ex =>
                ex.name.toLowerCase().includes(search)
                || ex.target.toLowerCase().includes(search)
                || ex.bodyPart.toLowerCase().includes(search)
                || ex.equipment.toLowerCase().includes(search))
            setSearch('')
            setExercises(searchedExercises)
        }
    }
    return (
        <Stack alignItems='center'
               justifyContent='center
               ' mt='37px' p='20px'>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: {
                        lg: '44px',
                        xs: '30px'
                    }
                }}
                mb='50px'
                textAlign='center'>Awesome Exercises You <br/>Should Know</Typography>
            <Box position='relative'
                 mb='72px'>
                <TextField height='76px'
                           value={search}
                           placeholder='Search Exercises'
                           onChange={(e) => setSearch(e.target.value.toLowerCase())}
                           type='text'
                           sx={{
                               input: {
                                   fontWeight: '700',
                                   border: 'none',
                                   borderRadius: '4px'
                               },
                               width: {
                                   lg: '800px',
                                   xs: '350px'
                               },
                               backgroundColor: '#fff',
                               borderRadius: '40px'
                           }}/>
                <Button className='search-btn'
                        sx={{
                            bgcolor: '#ff2625',
                            color: '#fff',
                            textTransform: 'none',
                            width: {lg: '175px', xs: '80px'},
                            fontSize: {lg: '20px', xs: '14px'},
                            height: '56px',
                            position: 'absolute',
                            right: '0'
                        }}
                        onClick={handleSearch}>Search</Button>
            </Box>
            <Box sx={{
                position: "relative",
                width: "100%",
                p: '20px'
            }}>
<HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    );
};

export default SearchExercises;