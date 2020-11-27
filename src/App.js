import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [gotResponse, setGotResponse] = useState(false);
  const locale = navigator.language === 'pt-BR' ? 'pt-BR' : 'en-US';
  const localString = {
    'en-US': 'Waiting for Heroku response...',
    'pt-BR': 'Aguardando resposta da Heroku...'
  };
  
  useEffect(() => {
    if (!gotResponse) {
      axios.get('https://odinclone.herokuapp.com/api/islogged')
        .then((response) => {
          setGotResponse(true);
        })
        .catch((err) => {
          setGotResponse(true);
        })
    } else {
      if (locale === 'en-US') {
        window.location.href = 'https://odinclone.herokuapp.com/en';
      } else {
        window.location.href = 'https://odinclone.herokuapp.com';
      }
    }
  }, [gotResponse, locale])
  
  return (
    <div className="App">
        <div className="loading-screen">
        <div>
          <i className="fas fa-spinner loading-spinner"></i>
        </div>
          { localString[locale] }
        </div>
    </div>
  );
}

export default App;
