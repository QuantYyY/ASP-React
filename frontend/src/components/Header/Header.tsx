import React, { FC } from 'react';

import { Header as HeaderComponent, HeaderModule, HeaderMenu } from '@consta/uikit/Header';
import { Text } from '@consta/uikit/Text';
import { useAppDispatch } from '../../hook';
import { changePageView } from '../../store/pageViewSlice';

const Header: FC = () => {

    const dispatch = useAppDispatch();

    const menuItems = [
        {
            label: 'Список',
            onClick: () => {
                dispatch(changePageView('listStudents'));
            },
        },
        {
            label: 'Добавление',
            onClick: () => {
                dispatch(changePageView('addStudents'));
            },
        }
    ];

    return (
        <>
            <HeaderComponent
                leftSide={
                    <>
                        <HeaderModule indent="l">
                            <HeaderMenu items={menuItems} />
                        </HeaderModule>
                    </>
                }
                rightSide={
                    <>
                        <HeaderModule>
                            <Text as="p" size="l" view='brand'>
                                HR-автоматизация
                            </Text>
                        </HeaderModule>
                    </>
                }
            />
        </>
    );
};

export default Header;