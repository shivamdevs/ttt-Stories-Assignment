import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ProfileCover from './components/ProfileCover';
import Stories from './context';
import Posts from './layout/Posts';
import PostContent from './layout/PostContent';
import React, { useEffect } from 'react';
import NotFound from './layout/NotFound';
function App() {
    return (
        <Stories>
            <Header />
            <main className="bg-white w-full max-w-4xl mx-auto shadow-2xl">
                <Routes>
                    <Route path="/posts/404" element={<NotFound />} />
                    <Route path="/posts/:post_id" element={<PostApp />} />
                    <Route path="/posts" element={<Navigate to="/" />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/" element={<MainApp />} />
                </Routes>
                <Footer />
            </main>
        </Stories>
    )
}

export default App;

function MainApp() {
    return (
        <ScrollRestorer>
            <ProfileCover />
            <Posts />
        </ScrollRestorer>
    );
}

function PostApp() {
    return (
        <ScrollRestorer>
            <ProfileCover />
            <PostContent />
        </ScrollRestorer>
    );
}


function ScrollRestorer({ children }: { children?: React.ReactNode }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (children);
}