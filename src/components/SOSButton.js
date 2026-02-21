import React from 'react';
import { useEffect } from 'react';
import { captureLocation } from '../services/geolocation';
import { sendEmergencySMS } from '../services/sms';
import { playAlarm } from '../services/audio';
import { getEmergencyContact } from '../utils/storage';

const SOSButton = () => {
    const handleClick = async () => {
        const location = await captureLocation();
        const contact = getEmergencyContact();

        if (location && contact) {
            const message = `Emergency! I need help at this location: https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
            await sendEmergencySMS(contact, message);
            playAlarm();
        }
    };

    return (
        <button onClick={handleClick} style={styles.button}>
            SOS
        </button>
    );
};

const styles = {
    button: {
        width: '200px',
        height: '200px',
        fontSize: '24px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
};

export default SOSButton;