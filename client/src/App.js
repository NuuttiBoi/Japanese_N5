import './App.css';
import {fetchWords} from "./service/WordService";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            axios.get("http://localhost:3001/japanese_words")
                .then(response => setWords(response.data))
                .catch(error => console.error(error));
        }
    )

    /*
    useEffect(() => {
      const getWords = async () => {
        try {
          const data = await fetchWords();
          setWords(data);
        } catch (error) {
          setError('Failed to fetch words.');
        } finally {
          setLoading(false);
        }
      };

      getWords();
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

     */

  return (
    <div className="App">
      <header className="App-header">
        <p>
            Tässä vitun lista
        </p>
        <ul>
          {words.map(word => (
              <li key={word.id}>
                {word.word_kanji} ({word.word_furagana}): {word.word_english}
              </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
