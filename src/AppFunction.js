import React, { useState, useEffect } from 'react';

const initialLocationState = {
  latitude: null,
  longitude: null
};

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude }, setLocation] = useState(initialLocationState);
  let mounted = true;

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  }, [count]);

  const toggleLight = () => {
    setIsOn(prevState => !isOn);
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleMouseMove = e => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  const handleGeolocation = e => {
    if (mounted) {
      setLocation({
        latitude: e.coords.latitude,
        longitude: e.coords.longitude
      });
    }
  };

  return (
    <>
      <button onClick={incrementCount}>Clicked {count} times</button>
      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }
        style={{ height: '80px', width: '80px' }}
        alt="flashlight"
        onClick={toggleLight}
      />
      <h2>Mouse Position</h2>
      {/* {JSON.stringify(mousePosition, null, 2)} */}
      <p>X Position: {mousePosition.x}</p>
      <p>Y Position: {mousePosition.y}</p>
      <h2>What is your Network Status?</h2>
      <p>
        <strong>You are {status ? 'online' : 'offline'}</strong>
      </p>
      <br />
      <h2>Geolocation</h2>
      <p>Latitude is {latitude}</p>
      <p>lontigude is {longitude}</p>
    </>
  );
};

export default App;
