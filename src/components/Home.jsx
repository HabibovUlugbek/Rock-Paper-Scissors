import React, { useState } from 'react';
import {FaHandRock, FaHandScissors, FaHandPaper} from 'react-icons/fa';
import  '../css/home.css'


const Home = () => {

    const [yourscore, setYourscore] = useState(0)
    const [comscore, setComscore] = useState(0)
    const [chosen, setChosen] = useState("")
    const [comchosen, setComchosen] = useState("")
    const [prize, setPrize] = useState("")
    const [classname, setClassname] = useState({className:"",win:"" })

    const ComputerChosen = () => {
       const number = Math.floor(Math.random() * 3)
        if (number === 0){
            setComchosen("rock")
        } else if(number === 1 ) {
            setComchosen("paper")
        } else if (number === 2) {
            setComchosen("scissors")
        }
    }

    const setCompare = () => {
        if (chosen === "rock" ) {
            if(comchosen === "rock"){
                setPrize("Draw")
            } else if (comchosen === "paper") {
                setPrize("You lose")
                setComscore(prevscore => prevscore + 1)
            }else if (comchosen === "scissors") {
                setPrize("You win")
                setYourscore(prevscore => prevscore + 1)
            }
        } else if(chosen === "paper"){
            if(comchosen === "rock"){
                setPrize("You win")
                setYourscore(prevscore => prevscore + 1)
            } else if (comchosen === "paper") {
                setPrize("Draw")
            }else if (comchosen === "scissors") {
                setPrize("You lose")
                setComscore(prevscore => prevscore + 1)
            }
        } else if (chosen === "scissors") {
            if(comchosen === "rock"){
                setPrize("You lose")
                setComscore(prevscore => prevscore + 1)
            } else if (comchosen === "paper") {
                setPrize("You win")
                setYourscore(prevscore => prevscore + 1)
            }else if (comchosen === "scissors") {
                setPrize("Draw")
            }
        } 
    }
    const setIcon = () => {
        if(comchosen === "rock") {
            return <FaHandRock />
        } else if (comchosen === "paper") {
            return <FaHandPaper />
        }else {return <FaHandScissors />}
    }

    const setRock = () => {
        setChosen("rock")
        ComputerChosen();
    }

    const setPaper = () => {
        setChosen("paper")
        ComputerChosen();
    }

    const setScissors = () => {
        setChosen("scissors")
        ComputerChosen();
    }
    const restart = () => {
        setYourscore(0)
        setComscore(0)
    }

    const Click = () => {
        setCompare()
        setClassname({...classname, className:"modal"})
    }

    const closeModal = () => {
        setClassname({...classname, className:"display-none"})
    }

    return ( 
        <div className="home">
            <header>
                <h1 className="game-name">Rock Paper Scissors</h1>
                <div className="restart-wrapper"><button onClick={restart} className="restart">Restart</button></div>
                <div className="score">
                    <p >You : {yourscore}</p>
                    <p >Computer : {comscore}</p>
                </div>
            </header>
            <main>
                <h3 className="chosen">Choose Your Item</h3>
                <div className="choice">
                    <div className="choises"><div onClick={Click} onMouseMove={setRock}  ><FaHandRock /></div></div>
                    <div className="choises"><div onClick={Click} onMouseMove={setPaper} ><FaHandPaper /></div></div>
                    <div className="choises"><div onClick={Click} onMouseMove={setScissors} ><FaHandScissors /></div></div>
                </div>
            </main>

            <div  className={`display-none ${classname.className}`}>
                <div className="modal-content">
                    <h2 className={`${prize}`}>{prize}</h2>
                    <div className="icon">
                        {setIcon()}
                    </div>
                    <p>Computer choise <i>{comchosen}</i> </p>
                    <button className="close-modal" onClick={closeModal}>OK</button>
                </div>
                
            </div>

        </div>
     );
}
 
export default Home;