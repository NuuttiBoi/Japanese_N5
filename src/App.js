import './App.css';
import {fetchWords} from "./service/WordService";
import {useEffect, useState} from "react";
import axios, {options} from "axios";
import { render } from 'react-dom';


function App() {

    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [answer, setAnswer] = useState('');
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState(null);

    const japanImage = require('./images/jpn_n5.png');
    const sendaiImage = require('./images/sendai_life.png');



    useEffect(() => {
            axios.get("http://localhost:3001/japanese_words")
                .then(response => setWords(response.data))
                .catch(error => console.error(error));
        }
    )

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = () =>{
        if(answer === words[index].word_english){
            alert("Correct!")
            setResult("correct");
            setIndex(index+1);
        } else {
            alert("Wrong! Try again!")
        }
        setAnswer('');
    }

    const handleSkip = () =>{
        alert("Correct Answer Is: " + words[index].word_english);
        setIndex(index+1);
    }

    const setText = () =>{
        if(result==="correct"){
            return(
                <>
                    Fuck u
                </>
            )
        }

    }


    const firstWords = () =>{
            return(
                words.slice(0,1).map(word => (
                        <li key={word.id}>
                            {word.word_kanji} ({word.word_furagana})
                            <label > =
                                <input value={answer} onChange={handleAnswerChange}/>
                                <button onClick={handleSubmit}>Check </button>
                            </label>
                        </li>
                    ))
            )

    }


    const secondWords = () =>{
        const word = words[index];
        if (!word) {
            console.warn("Word is undefined or words array is missing elements");
            return null; // Safeguard in case words[1] is undefined
        }

        return(
                <li key={word.id} id="wordField">
                    {word.word_kanji} ({word.word_furagana})
                    <label > =
                        <input value={answer} onChange={handleAnswerChange}/>
                        <button onClick={handleSubmit} id="submitButton">Check</button>
                        <button onClick={handleSkip} id="skipButton">Skip</button>
                    </label>
                    <p>{setText}</p>
                </li>
            )
    }



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
            <img src={japanImage} alt={"jpn"}></img>
            <img src={sendaiImage} alt={"sendai"} id="sendai"/>
            <p>
                Okamoto Is Watching You..
            </p>
            <ul>
                {/*{firstWords()} */}
            </ul>
            <ul>
                {secondWords()}
            </ul>
        </header>
    </div>
  );
}

export default App;
