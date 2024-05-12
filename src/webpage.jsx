import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Websocketpage() {
    const [loadingStatus, setLoadingStatus] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        socket.on('loading_status', data => {
            setLoadingStatus(data.status);
        });

        socket.on('complete', () => {
            setIsComplete(true);
        });

        return () => {
            socket.off('loading_status');
            socket.off('complete');
        };
    }, []);

    const startLoading = () => {
        setLoadingStatus('Loading part 1');
        socket.emit('start_loading');
    };

    return (
        <div>
            <h1>Loading Status</h1>
            {!isComplete ? (
                <>
                    <p>{loadingStatus}</p>
                    <button onClick={startLoading} disabled={loadingStatus !== ''}>Start Loading</button>
                </>
            ) : (
                <p>Complete!</p>
            )}
        </div>
    );
}

export default Websocketpage;