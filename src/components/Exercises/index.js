import React, {useEffect, useState} from 'react';
import {Pagination, Box, Stack, Typography} from "@mui/material";
import {exerciseOptions, fetchData} from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard";
import bodyPart from "../BodyPart";

const Exercises = ({exercises, bodyPart, setExercises}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 9

    const paginate = (e, value) => {
        setCurrentPage(value)
        window.scrollTo({top: 1800, behavior: 'smooth'})
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = []
            if (bodyPart === 'all') {
                exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
            }
            setExercises(exercisesData)
        }
        fetchExercisesData()
    }, [bodyPart])

    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    return (
        <Box
            id='exercises'
            sx={{mt: {lg: '110px'}}}
            mt='50px'
            p="20px">
            <Typography
                variant='h3'
                mb='46px'
                fontWeight="bold"
                sx={{fontSize: {lg: '44px', xs: '30px'}}}>
                Showing Results
            </Typography>
            <Stack
                direction='row'
                sx={{
                    gap: {lg: '110px', xs: '50px'}
                }}
                flexWrap='wrap'
                justifyContent='center'>
                {currentExercises.map((ex, idx) => (
                    <ExerciseCard key={idx} exercise={ex}/>
                ))}
            </Stack>
            <Stack mt='100px' alignItems='center'>{exercises.length > 9 && (
                <Pagination color='standard'
                            shape='rounded'
                            defaultPage={1}
                            count={Math.ceil(exercises.length / 9)}
                            page={currentPage}
                            onChange={paginate}
                            size='large'/>
            )}</Stack>
        </Box>
    );
};

export default Exercises;