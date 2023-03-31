import React, { FC } from 'react';

import { Text } from "@consta/uikit/Text";
import { IconTrash } from '@consta/icons/IconTrash';

import Student from './StudentsData';
import { useAppDispatch } from '../../../hook';
import { axiosDeleteStudents } from '../../../store/studentsSlice';


const StudentApi: FC<Student> = (props) => {

    const dispatch = useAppDispatch();
    
    return (
        <div className="info">
            <Text view="ghost" lineHeight = 'l' > <strong>Имя: </strong> </Text> <Text view="primary" lineHeight = 'l' > {props.StudentName} </Text> 
            <Text view="ghost" lineHeight = 'l' > <strong>Telegram: </strong> </Text> <Text view="primary" lineHeight = 'l' > {props.StudentContact} </Text>
            <button className='iconButton' onClick={() => dispatch(axiosDeleteStudents(Number(props.StudentId)))}><IconTrash /></button>
        </div>
    );
};

export default StudentApi;