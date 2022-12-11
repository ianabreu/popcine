import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from "styled-components/native";


export default function StarsRate({ rating }) {
    const [stars, setStars] = useState([0, 1, 2, 3, 4])
    const [starClass, setStarClass] = useState(["star", "star", "star", "star", "star-half"]);

    useEffect(() => {
        function setStarState(voteAverage) {
            if (voteAverage === undefined) return;
            const full = 'star';
            const half = 'star-half';
            const empty = 'star-outline';
            let arrayClass = [];
            let classReturn ;
            for (let index = 1; index <= 9; index += 2) {
                if (voteAverage <= (index - 1)) {
                    classReturn = empty;
                } else if (voteAverage <= index && voteAverage > (index - 1)) {
                    classReturn = half;
                } else if (voteAverage > index) {
                    classReturn = full;
                }
                arrayClass.push(classReturn);
            }
            setStarClass(arrayClass);
        }
        setStarState(rating);
        
    }, [rating])
    return (
        <>
        <StarsArea style={{ flexDirection: 'row', alignItems: 'center' }}>
            {starClass && stars.map((item) => (
            <StarIcon key={stars[item]} name={starClass[item]} size={25} color={'#FFF'} />
            ))}
        </StarsArea>
        </>
    );
}

export const StarIcon = styled(Icon).attrs({
    size: 25,
    color: '#E0E722',
})`
margin-left: 5px;
`
export const StarsArea = styled.View`
flex-direction: row;
margin: 10px 0;
`;
