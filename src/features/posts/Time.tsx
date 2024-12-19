type TimeProps = {
    timestamp: number;
}

const Time = ({timestamp}: TimeProps) => {

    return <p>{new Date(timestamp).toLocaleTimeString()}</p>
}

export default Time;