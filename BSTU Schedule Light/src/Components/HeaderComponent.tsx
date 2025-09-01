import React, { useEffect, useState } from "react";
const HeaderComponent: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const [dayName, setDayName] = useState<string>('');

    useEffect(() => {

        const today = new Date();

        const options: Intl.DateTimeFormatOptions = { weekday: 'long' };

        const dayName = today.toLocaleDateString('ru-RU', options);
        setDayName(dayName.charAt(0).toUpperCase()+dayName.slice(1)); 
        
    }, []);
    return (
        <header>
            <div className="DayNameHolder">{dayName}</div>
            <div className="divider" />
            <div className="CurrentDateHolder">{time.toLocaleDateString()} | {time.toLocaleTimeString()}</div>
        </header>
    )
}

export default HeaderComponent;