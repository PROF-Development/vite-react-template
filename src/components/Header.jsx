import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Typography } from 'antd'
import logo from '../assets/react.svg'
import { HOME_PATH } from '../utils/navigation/path'


export default function Header() {
    return (
        <>
            <Link to={HOME_PATH}>
                <Avatar src={logo} size='medium'/>
            </Link>
            <Typography.Text style={{color: 'white'}}>Some text</Typography.Text>
        </>
    )
}
