import React from "react"

export const Squares = ({ list }) => {
    return (
        <>
            {list.map((el) => (
                <img key={el.id} src={el.thumbnailUrl} alt='' />
            ))}
        </>
    )
}