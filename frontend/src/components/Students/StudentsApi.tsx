import React, { FC } from 'react';
import { Text } from "@consta/uikit/Text";
import Student from './StudentsData';

const StudentApi: FC<Student> = (props) => {
    
    return (
        <div className="info">
            <Text view="ghost" lineHeight = 'l' > <strong>Name: </strong> </Text> <Text view="primary" lineHeight = 'l' > {props.StudentName} </Text> 
            <Text view="ghost" lineHeight = 'l' > <strong>Email: </strong> </Text> <Text view="primary" lineHeight = 'l' > {props.StudentContact} </Text>
        </div>
    );
};

export default StudentApi;