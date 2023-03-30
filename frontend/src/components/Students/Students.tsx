import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { urlStudents } from '../../endpoints/endpoints';
import { Card } from '@consta/uikit/Card';
import Student from './StudentsData';
import StudentApi from './StudentsApi';

const Students: FC = () => {

    const [students, setItems] = useState<Student[]>([])

    useEffect(() => {
        axios.get(urlStudents)
            .then((response) => {
                setItems(response.data)
            })
    });

    return (
        <>
                {students.map((item) => (
                    <>
                            <Card verticalSpace={"2xl"} horizontalSpace={"2xl"} shadow={true} className="api">
                                <StudentApi key={item.id} {...item} />
                            </Card>
                    </>
                ))}


        </>
    );
}

export default Students;