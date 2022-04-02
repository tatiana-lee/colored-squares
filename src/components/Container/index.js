import React, { useEffect } from "react";
import { useState } from 'react'
import { Squares } from "../Squares/Squares";

export const Container = () => {
    const [squares, setSquares] = useState([])
    
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=50')
        .then((response) => {return response.json()})
        .then((result) => {
            setSquares(result)
        })
}, [])

    return (
        <div>
            <Squares list={squares}/>
        </div>
    )
}