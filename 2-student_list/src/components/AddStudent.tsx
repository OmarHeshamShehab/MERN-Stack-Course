import { Button, Paper, TextField } from "@mui/material"
import { ChangeEvent, Dispatch } from "react"
import { Student } from "../utils/data"

interface Props {
    students: Student[]
    setStudents: Dispatch<React.SetStateAction<Student[]>>
}


export const AddStudent = ({ setStudents, students }: Props) => {

    let formData = { id: 999, name: "", age: 0, email: "", class: "" }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        formData.name = e.target.value
    }
    const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        formData.age = parseInt(e.target.value)
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        formData.email = e.target.value
    }
    const handleClassChange = (e: ChangeEvent<HTMLInputElement>) => {
        formData.class = e.target.value
    }
    const handlesubmit = () => {
        setStudents([...students, formData])
    }
    return (
        <Paper sx={{ marginTop: 1, padding: 5, width: 300, gap: 1, display: "flex", flexDirection: "column" }}>
            <TextField onChange={handleNameChange} id="outlined-basic" label="Full Name" name="fullname" variant="outlined" />
            <TextField onChange={handleAgeChange} id="outlined-basic" label="Age" name="Age" variant="outlined" />
            <TextField onChange={handleEmailChange} id="outlined-basic" label="Email" name="Email" variant="outlined" />
            <TextField onChange={handleClassChange} id="outlined-basic" label="Class" name="Class" variant="outlined" />
            <Button onClick={handlesubmit} variant="contained">Submit</Button>
        </Paper>
    )
}