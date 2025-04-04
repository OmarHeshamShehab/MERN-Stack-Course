import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Student } from '../utils/data';

interface Props {
    students: Student[],
}

export const StudentTable = (props: Props) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Class</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.students.map((item) => {
                        return (
                            <TableRow key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                <td>{item.class}</td>
                            </TableRow>
                        );
                    })}

                </TableBody>
            </Table>
        </TableContainer>
    )
}