import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';

const wrapperStyle = {
  minHeight: '100vh',
};

export default function StaticPage({
   children,
   style,
   noFooter = false,
   noHeader = false,
   }) {
  return (
      <Layout style={{ ...style, ...wrapperStyle }}>
        {!noHeader && (
            <Layout.Header style = {{
              background: `gray url() no-repeat center center fixed`,
              backgroundSize: 'cover',
              maxWidth: "100vw"
            }}>
              <Header/>
            </Layout.Header>
        )}
        <Layout.Content style={{
          maxWidth: '100%',
          maxHeight: '100%',
          backgroundColor: 'white'
        }}>
          {children}
        </Layout.Content>
        {!noFooter && (
            <Layout.Footer style={{
              backgroundColor: "#f5f5ff",
            }}>
              <Footer />
            </Layout.Footer>
        )}
      </Layout>
  );
}

