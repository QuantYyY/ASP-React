import React, { FC } from "react";

import './AddStudents.css';
import Student from "../ListStudents/StudentsData";

import { Button } from '@consta/uikit/Button';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from "../../../hook";
import { axiosPostStudents } from "../../../store/studentsSlice";

const AddStudents: FC = () => {

    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data: Student) => {
        console.log(data);
        dispatch(axiosPostStudents(data));
        reset()
    }

    return (
        <>
            <div className="formArea">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <label htmlFor="" className="labelInput">
                            <span className="">Имя</span>  <br />
                            <input className="authInput" {...register('StudentName')} />
                        </label>
                    </div>

                    <div >
                        <label htmlFor="">
                            <span className="">Telegram</span>  <br />
                            <input className="authInput" {...register('StudentContact')} />
                        </label>
                    </div>
                    <div className="SubmitButtonArea">
                        <Button label={'Добавить'} />
                    </div>
                </form>

            </div>
        </>
    );
}

export default AddStudents;