import { Button, CircularProgress, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import HelpIcon from '@mui/icons-material/Help';
import { useState } from 'react'
import ShowData from '../components/ShowData';

const Landing = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [loading, setLoading] = useState(false)
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=1635890035cbba097fd5c26c8ea672a1&cnt=5`
    
    const searchLocation = () => {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        setLoading(false)
    }
    const onHandleChange = (event) => {
        setLoading(true)
        setLocation(event.target.value)

    }
    const onHandleClick = () => {
        searchLocation()

    }
    return (
        <>
            <div className='search'>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 1, md: 3 }}
                    sx={{ padding: 5 }}
                >
                    <Typography variant='h5' sx={{ color: "#FF5733 ", marginRight: 10 }} >Weather in your city</Typography>
                    <TextField

                        id="outlined-size-small"
                        defaultValue="Enter city...."
                        size="small"
                        value={location}
                        onChange={onHandleChange}
                        inputProps={{ style: { outlineColor: "#FF5733" } }}
                    >
                    </TextField>

                    <Button
                        variant='contained'
                        sx={{ color: "white", bgcolor: "#FF5733" }}
                        onClick={onHandleClick}
                    ><HelpIcon
                            fontSize='small'
                            sx={{ padding: 0.5 }} />Search</Button>
                    {loading && <CircularProgress
                        size={18} />}

                </Stack>
            </div>
            <ShowData getData={data.list} />
        </>
    )
}

export default Landing