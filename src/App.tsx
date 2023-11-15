import Header from './components/Header';
import ProfileCover from './components/ProfileCover';
import Stories from './context';

function App() {
    return (
        <Stories>
            <Header />
            <main className="bg-white w-full max-w-4xl mx-auto shadow-2xl">
                <ProfileCover />
            </main>
        </Stories>
    )
}

export default App;