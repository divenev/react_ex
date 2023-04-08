import {useForm} from '../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { addBikeService } from '../services/addBikeService'

export const AddBike = () => {
    const { values, changeHandler } = useForm({
        brand: '',
        category: '',
        frameNumber: '',
        imageUrl: '',
        description: '',
        status: ''
    })
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        await addBikeService(e)
        // my bike
        navigate('/bike/my')
    }



    return (
        <>
            <form className="form" id="create" onSubmit={onSubmit}>
                <input type="text" name="brand" value={values.brand} onChange={changeHandler} placeholder="Brand"></input>
                <input type="text" name="category" value={values.category} onChange={changeHandler} placeholder="Category"></input>
                <input type="text" name="frameNumber" value={values.frameNumber} onChange={changeHandler} placeholder="Frame Number"></input>
                <select name="status">
                    <option value="for sale">For sale</option>
                    <option value="stolen">Stolen</option>
                </select>
                <input type="url" name="imageUrl" value={values.imageUrl} onChange={changeHandler} placeholder="Url image"></input>
                <input type="text" name="description" value={values.description} onChange={changeHandler} placeholder="Description"></input>
                <input type="submit" className="button" value="Add bike"></input>
            </form>
        </>
    )
}