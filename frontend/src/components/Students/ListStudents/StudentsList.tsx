import React, { FC, useEffect } from 'react';

import { Card } from '@consta/uikit/Card';
import { Grid, GridItem } from '@consta/uikit/Grid';


import StudentApi from './StudentsApi';
import './Students.css';

import { axiosGetStudents } from '../../../store/studentsSlice';
import { useAppDispatch, useAppSelector } from '../../../hook';

const StudentsList: FC = () => {


    const dispatch = useAppDispatch();
    const students = useAppSelector(state => state.students.list);

    useEffect(() => {
        dispatch(axiosGetStudents())
    }, [dispatch]);


    return (
        <>
            <Grid cols={4} gap={0}>
                {students.map((item) => (
                    <>
                        <GridItem>
                            <Card verticalSpace={"2xl"} horizontalSpace={"2xl"} shadow={true} className="api">
                                <StudentApi key={item.StudentId} {...item} />
                            </Card>
                        </GridItem>
                    </>
                ))}
            </Grid>

        </>
    );
}

export default StudentsList;