import { useRef, useEffect, useState } from 'react';
import "./style.css"

function Main() {
    const [isTrueOne, setIsTrueOne] = useState(false)
    const [isTrueTwo, setIsTwo] = useState(false)
    const [isTrueThree, setIsThree] = useState(false)
    const [isTrueFour, setIsFour] = useState(false)
    const [isTrueFive, setIsFive] = useState(false)
    const [isTrueSix, setIsSix] = useState(false)
    const [isTrueSeven, setIsSeven] = useState(false)
    const [isTrueEight, setIsEight] = useState(false)
    const [isTrueNine, setIsNine] = useState(false)
    const [ticTac1, setTicTac1] = useState("")
    const [ticTac2, setTicTac2] = useState("")
    const [ticTac3, setTicTac3] = useState("")
    const [ticTac4, setTicTac4] = useState("")
    const [ticTac5, setTicTac5] = useState("")
    const [ticTac6, setTicTac6] = useState("")
    const [ticTac7, setTicTac7] = useState("")
    const [ticTac8, setTicTac8] = useState("")
    const [ticTac9, setTicTac9] = useState("")
    const [isTicTac, setIsTicTac] = useState(true)
    const[win,setWin]=useState(false)
    const[scoreless,setScoreless]=useState(false)
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const ref9 = useRef(null);

    useEffect(() => {
        if (isTrueOne===false) {
            const handleClick = event => {
                // console.log('Button clicked');
                setIsTrueOne(true)
                if (isTicTac === true) {
                    setTicTac1("X")
                    setIsTicTac(!isTicTac)
                }
                if (isTicTac === false) {
                    setTicTac1("O")
                    setIsTicTac(!isTicTac)
                }
            };
    
            const element = ref1.current;
    
            element.addEventListener('click', handleClick);
    
            return () => {
                element.removeEventListener('click', handleClick);
            };
        }
        
    }, [setIsTrueOne, isTicTac, setTicTac1, setIsTicTac,isTrueOne]);

    useEffect(() => {
        if (isTrueTwo===false) {

        const handleClick = event => {
            // console.log('Button clicked');
            setIsTwo(true)
            if (isTicTac === true) {
                setTicTac2("X")
                setIsTicTac(!isTicTac)
            }
            if (isTicTac === false) {
                setTicTac2("O")
                setIsTicTac(!isTicTac)
            }
        };

        const element = ref2.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }
    }, [setIsTwo, isTicTac, setTicTac2, setIsTicTac,isTrueTwo]);

    useEffect(() => {
        if (isTrueThree===false) {

        const handleClick = event => {
            // console.log('Button clicked');
            setIsThree(true)
            if (isTicTac === true) {
                setTicTac3("X")
                setIsTicTac(!isTicTac)
            }
            if (isTicTac === false) {
                setTicTac3("O")
                setIsTicTac(!isTicTac)
            }
        };

        const element = ref3.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }
    }, [setIsThree, isTicTac, setTicTac3, setIsTicTac, isTrueThree]);

    useEffect(() => {
        if (isTrueFour===false) {

        const handleClick = event => {
            // console.log('Button clicked');
            setIsFour(true)
            if (isTicTac === true) {
                setTicTac4("X")
                setIsTicTac(!isTicTac)
            }
            if (isTicTac === false) {
                setTicTac4("O")
                setIsTicTac(!isTicTac)
            }
        };

        const element = ref4.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }
    }, [setIsFour, isTicTac, setTicTac4, setIsTicTac,isTrueFour]);

    useEffect(() => {
        if (isTrueFive===false) {

        const handleClick = event => {
            // console.log('Button clicked');
            setIsFive(true)
            if (isTicTac === true) {
                setTicTac5("X")
                setIsTicTac(!isTicTac)
            }
            if (isTicTac === false) {
                setTicTac5("O")
                setIsTicTac(!isTicTac)
            }
        };

        const element = ref5.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }
    }, [setIsFive, isTicTac, setTicTac5, setIsTicTac,isTrueFive]);

    useEffect(() => {
        if (isTrueSix===false) {

        const handleClick = event => {
            // console.log('Button clicked');
            setIsSix(true)
            if (isTicTac === true) {
                setTicTac6("X")
                setIsTicTac(!isTicTac)
            }
            if (isTicTac === false) {
                setTicTac6("O")
                setIsTicTac(!isTicTac)
            }
        };

        const element = ref6.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }
    }, [setIsSix, isTicTac, setTicTac6, setIsTicTac,isTrueSix]);

    useEffect(() => {
        if (isTrueSeven===false) {

        const handleClick = event => {
            // console.log('Button clicked');
            setIsSeven(true)
            if (isTicTac === true) {
                setTicTac7("X")
                setIsTicTac(!isTicTac)
            }
            if (isTicTac === false) {
                setTicTac7("O")
                setIsTicTac(!isTicTac)
            }
        };

        const element = ref7.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }
    }, [setIsSeven, isTicTac, setTicTac7, setIsTicTac,isTrueSeven]);

    useEffect(() => {
        if (isTrueEight===false) {

        const handleClick = event => {
            // console.log('Button clicked');
            setIsEight(true)
            if (isTicTac === true) {
                setTicTac8("X")
                setIsTicTac(!isTicTac)
            }
            if (isTicTac === false) {
                setTicTac8("O")
                setIsTicTac(!isTicTac)
            }
        };

        const element = ref8.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }
    }, [setIsEight, isTicTac, setTicTac8, setIsTicTac,isTrueEight]);

    useEffect(() => {
        if (isTrueNine===false) {

        const handleClick = event => {
            // console.log('Button clicked');
            setIsNine(true)
            if (isTicTac === true) {
                setTicTac9("X")
                setIsTicTac(!isTicTac)
            }
            if (isTicTac === false) {
                setTicTac9("O")
                setIsTicTac(!isTicTac)
            }
        };

        const element = ref9.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }
    }, [setIsNine, isTicTac, setTicTac9, setIsTicTac,isTrueNine]);

  useEffect(() => {
    if (ticTac1==="X" && ticTac2==="X"&& ticTac3==="X" ) {
      setWin(true) 
      setIsNine(true) 
      setIsEight(true)
      setIsSeven(true)
      setIsSix(true)
      setIsFive(true)
      setIsFour(true)
    }
    if (ticTac4==="X" && ticTac5==="X"&& ticTac6==="X" ) {
        setWin(true) 
        setIsNine(true) 
        setIsEight(true)
        setIsSeven(true)
        setIsThree(true)
        setIsTwo(true)
        setIsTrueOne(true)
      }
      if (ticTac7==="X" && ticTac8==="X"&& ticTac9==="X" ) {
        setWin(true) 
        setIsSix(true)
        setIsFive(true)
        setIsFour(true)
        setIsThree(true)
        setIsTwo(true)
        setIsTrueOne(true)
      }
      if (ticTac1==="X" && ticTac4==="X"&& ticTac7==="X" ) {
        setWin(true) 
        setIsSix(true)
        setIsFive(true)
        setIsThree(true)
        setIsTwo(true)
        setIsEight(true)
        setIsNine(true)
      }
      if (ticTac2==="X" && ticTac5==="X"&& ticTac8==="X" ) {
        setWin(true) 
        setIsSix(true)
        setIsThree(true)
        setIsNine(true)
        setIsTrueOne(true)
        setIsFour(true)
        setIsSeven(true)
      }
      if (ticTac3==="X" && ticTac6==="X"&& ticTac9==="X" ) {
        setWin(true) 
        setIsFive(true)
        setIsTwo(true)
        setIsEight(true)
        setIsTrueOne(true)
        setIsFour(true)
        setIsSeven(true)
      }
      if (ticTac3==="X" && ticTac5==="X"&& ticTac7==="X" ) {
        setWin(true) 
        setIsTwo(true)
        setIsEight(true)
        setIsTrueOne(true)
        setIsFour(true)
        setIsSix(true)
        setIsNine(true)
      }
      if (ticTac1==="X" && ticTac5==="X"&& ticTac9==="X" ) {
        setWin(true) 
        setIsTwo(true)
        setIsEight(true)
        setIsFour(true)
        setIsSeven(true)
        setIsThree(true)
        setIsSix(true)
      }

       if (ticTac1==="X" && ticTac2==="X"&& ticTac3==="X" ) {
      setWin(true) 
      setIsNine(true) 
      setIsEight(true)
      setIsSeven(true)
      setIsSix(true)
      setIsFive(true)
      setIsFour(true)
    }
    if (ticTac4==="X" && ticTac5==="X"&& ticTac6==="X" ) {
        setWin(true) 
        setIsNine(true) 
        setIsEight(true)
        setIsSeven(true)
        setIsThree(true)
        setIsTwo(true)
        setIsTrueOne(true)
      }
      if (ticTac7==="X" && ticTac8==="X"&& ticTac9==="X" ) {
        setWin(true) 
        setIsSix(true)
        setIsFive(true)
        setIsFour(true)
        setIsThree(true)
        setIsTwo(true)
        setIsTrueOne(true)
      }
      if (ticTac1==="X" && ticTac4==="X"&& ticTac7==="X" ) {
        setWin(true) 
        setIsSix(true)
        setIsFive(true)
        setIsThree(true)
        setIsTwo(true)
        setIsEight(true)
        setIsNine(true)
      }
      if (ticTac2==="X" && ticTac5==="X"&& ticTac8==="X" ) {
        setWin(true) 
        setIsSix(true)
        setIsThree(true)
        setIsNine(true)
        setIsTrueOne(true)
        setIsFour(true)
        setIsSeven(true)
      }
      if (ticTac3==="X" && ticTac6==="X"&& ticTac9==="X" ) {
        setWin(true) 
        setIsFive(true)
        setIsTwo(true)
        setIsEight(true)
        setIsTrueOne(true)
        setIsFour(true)
        setIsSeven(true)
      }
      if (ticTac3==="X" && ticTac5==="X"&& ticTac7==="X" ) {
        setWin(true) 
        setIsTwo(true)
        setIsEight(true)
        setIsTrueOne(true)
        setIsFour(true)
        setIsSix(true)
        setIsNine(true)
      }
      if (ticTac1==="X" && ticTac5==="X"&& ticTac9==="X" ) {
        setWin(true) 
        setIsTwo(true)
        setIsEight(true)
        setIsFour(true)
        setIsSeven(true)
        setIsThree(true)
        setIsSix(true)
      }
      
      if (ticTac1==="O" && ticTac2==="O"&& ticTac3==="O" ) {
        setWin(true) 
        setIsNine(true) 
        setIsEight(true)
        setIsSeven(true)
        setIsSix(true)
        setIsFive(true)
        setIsFour(true)
      }
      if (ticTac4==="O" && ticTac5==="O"&& ticTac6==="O" ) {
          setWin(true) 
          setIsNine(true) 
          setIsEight(true)
          setIsSeven(true)
          setIsThree(true)
          setIsTwo(true)
          setIsTrueOne(true)
        }
        if (ticTac7==="O" && ticTac8==="O"&& ticTac9==="O" ) {
          setWin(true) 
          setIsSix(true)
          setIsFive(true)
          setIsFour(true)
          setIsThree(true)
          setIsTwo(true)
          setIsTrueOne(true)
        }
        if (ticTac1==="O" && ticTac4==="O"&& ticTac7==="O" ) {
          setWin(true) 
          setIsSix(true)
          setIsFive(true)
          setIsThree(true)
          setIsTwo(true)
          setIsEight(true)
          setIsNine(true)
        }
        if (ticTac2==="O" && ticTac5==="O"&& ticTac8==="O" ) {
          setWin(true) 
          setIsSix(true)
          setIsThree(true)
          setIsNine(true)
          setIsTrueOne(true)
          setIsFour(true)
          setIsSeven(true)
        }
        if (ticTac3==="O" && ticTac6==="O"&& ticTac9==="O" ) {
          setWin(true) 
          setIsFive(true)
          setIsTwo(true)
          setIsEight(true)
          setIsTrueOne(true)
          setIsFour(true)
          setIsSeven(true)
        }
        if (ticTac3==="O" && ticTac5==="O"&& ticTac7==="O" ) {
          setWin(true) 
          setIsTwo(true)
          setIsEight(true)
          setIsTrueOne(true)
          setIsFour(true)
          setIsSix(true)
          setIsNine(true)
        }
        if (ticTac1==="O" && ticTac5==="O"&& ticTac9==="O" ) {
          setWin(true) 
          setIsTwo(true)
          setIsEight(true)
          setIsFour(true)
          setIsSeven(true)
          setIsThree(true)
          setIsSix(true)
        }
        if (ticTac1!=="" && ticTac2!==""&& ticTac3!==""&&
        ticTac4!==""&&ticTac5!==""&&ticTac6!==""&&
        ticTac7!==""&&ticTac8!==""&&ticTac9!=="" ) {
            setScoreless(true)
          }
  }, [setWin,ticTac1,ticTac2,ticTac3,ticTac4,ticTac5,ticTac6,ticTac7,ticTac8,ticTac9,setIsNine, setIsEight,setIsSeven,setIsSix,setIsFive,setIsFour,setIsThree,setIsTwo,setIsTrueOne,setScoreless])

  function click(){
    setScoreless(false)
    setWin(false)
    setIsTicTac(true)
    setTicTac1("")
    setIsTrueOne(false)
    setTicTac2("")
    setIsTwo(false)
    setTicTac3("")
    setIsThree(false)
    setTicTac4("")
    setIsFour(false)
    setTicTac5("")
    setIsFive(false)
    setTicTac6("")
    setIsSix(false)
    setTicTac7("")
    setIsSeven(false)
    setTicTac8("")
    setIsEight(false)
    setTicTac9("")
    setIsNine(false)
  }

    return (
        <div>
            <div className='boxone'  >
                <div ref={ref1} className="box1" id='box1'   >
                    {isTrueOne ? <h1 > {ticTac1}</h1> : <div></div>}
                </div>
                <div ref={ref2} className="box2" id='box2' >
                    {isTrueTwo ? <h1 >{ticTac2}</h1> : <div></div>}
                </div>
                <div ref={ref3} className="box3" id='box3' >
                    {isTrueThree ? <h1 >{ticTac3}</h1> : <div></div>}
                </div>
            </div>
            <div className='boxone'>
                <div ref={ref4} className="box1" id='box1' >
                    {isTrueFour ? <h1 >{ticTac4}</h1> : <div></div>}
                </div>
                <div ref={ref5} className="box2" id='box2' >
                    {isTrueFive ? <h1 >{ticTac5}</h1> : <div></div>}
                </div>
                <div ref={ref6} className="box3" id='box3' >
                    {isTrueSix ? <h1 >{ticTac6}</h1> : <div></div>}
                </div>
            </div>
            <div className='boxone'>
                <div ref={ref7} className="box1" id='box1' >
                    {isTrueSeven ? <h1 >{ticTac7}</h1> : <div></div>}
                </div>
                <div ref={ref8} className="box2" id='box2' >
                    {isTrueEight ? <h1 >{ticTac8}</h1> : <div></div>}
                </div>
                <div ref={ref9} className="box3" id='box3' >
                    {isTrueNine ? <h1 >{ticTac9}</h1> : <div></div>}
                </div>
            </div>
            {isTicTac?  <div className='player'><h2>Player's Turn </h2> <h2 className='x'>"X"</h2> </div>: <div className='player1'><h2>Player's Turn</h2><h2 className='x'>"O"</h2> </div>}
            {win? isTicTac===false && <div><h2>Win "X"</h2> <button type="button" className="btn button"  onClick={click}>Again</button> </div>:<div></div>}
            {win? isTicTac===true && <div><h2>Win "O"</h2> <button type="button" className="btn button"  onClick={click}>Again</button> </div>:<div></div>}
            {scoreless? win===false && <div><h2>Draw</h2> <button  type="button" className="btn button" onClick={click}>Again</button> </div>: <div></div> }
        </div>
    )
}

export default Main