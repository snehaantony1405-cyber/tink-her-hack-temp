import React, { useEffect } from 'react';
import { playAlarmSound } from '../services/audio';

const Alarm = () => {
    useEffect(() => {
        playAlarmSound();
    }, []);

    return null;
};

export default Alarm;