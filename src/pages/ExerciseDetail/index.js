import React, {useEffect, useState} from 'react';
import {Box, } from '@mui/material'
import {exerciseOptions, fetchData } from "../../utils/fetchData";
import Detail from "../../components/Detail";
import ExerciseVideos from "../../components/ExerciseVideos";
import SimilarExercises from "../../components/SimilarExercises";
import {useParams} from "react-router-dom";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
             setExerciseDetail(exerciseDetailData);
        }
        fetchExercisesData().then(r => console.log(r))
    }, [id])
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    );
};

export default ExerciseDetail;