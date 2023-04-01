import { useState } from "react"
import { useForm } from "../hooks/useForm"
import { checkBike } from "../services/checkBike"

export const Check = () => {

    const [bike, setBike] = useState()
    const { values, changeHandler } = useForm({
        frame_number: ''
    })

    const onSubmit = async (e) => {
        const result = await checkBike(e)
        setBike(result)
    }


    return (

        <form className="form" id="login" onSubmit={onSubmit}>

            <input type="frame_number" name="frame_number" value={values.frame_number} onChange={changeHandler} placeholder="Frame number"></input>

            <input type="submit" className="button" value="Check a bike"></input>

            {bike && <>
                <p><b>Status: {bike[0].status}</b></p>
                <p>Brand: {bike[0].brand}</p>
                <p>Category: {bike[0].category}</p>
                <p>Description: {bike[0].description}</p>
                <p>FrameNumber: {bike[0].frameNumber}</p>               
                <img src={bike[0].imageUrl} alt="bike_image" />
            </>
            }
        </form>
    )
}