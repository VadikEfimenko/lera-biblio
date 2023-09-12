import './App.css';
import './fonts/Caveat-Medium.ttf';


function App() {
    let fontSize = 24;

    return (
    <div className="App">
        <div className="blur">
            <button
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://disk.yandex.ru/d/hezuSYZPXOdpbA';
                }}
                className="button"
            >
                <div
                    className='text'
                >
                    Моя библиотека
                </div>
            </button>
        </div>
    </div>
  );
}

export default App;
