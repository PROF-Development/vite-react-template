import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Footer from './Footer'


const wrapperStyle = {
    minHeight: '100vh',
}


export default function StaticPage({ children, style, noFooter = false, noHeader = false }) {
    return (
        <Layout style={{...style, ...wrapperStyle }}>
            {
                !noHeader &&
                <Layout.Header>
                    <Header />
                </Layout.Header>
            }
            <Layout.Content>
                {children}
            </Layout.Content>
            {
                !noFooter &&
                <Layout.Footer>
                    <Footer />
                </Layout.Footer>

            }
        </Layout>
    )
}
