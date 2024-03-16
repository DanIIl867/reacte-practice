import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';


export const Clock = () => {

    const [time, setTime] = useState(new Date())

    const intervalId = useRef(null)

    const stop = () => {
        clearInterval(intervalId.current);
    }

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            // console.log('Цей метод викликається перед кожним розмонтуванням компоненту');
            stop();
        }

    }, [time])


//     state = {
//     time: new Date(),
// }

    

    // componentDidMount() {
    //     this.intervalId = setInterval(() => {
    //         console.log('Це інтервал кожні 1000ms ' + Date.now());
    //         this.setState({ time: new Date() });
    //     }, 1000);
    // }
    
    // componentWillUnmount() {
       
    // }

    return (
        <div className={styles.container}>
            <p className={styles.clockface}>
            Поточний час:
            
            <br />

            {time.toLocaleTimeString()}
            </p>

            <br />

            <button type="button" onClick={stop}>
                Зупинити
            </button>
        </div>
    );
}