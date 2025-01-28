import React from "react";

interface TrackProgressProps {
    left: number;
    right: number;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isTime: boolean;
}

const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};

const TrackProgress: React.FC<TrackProgressProps> = ({ left, right, onchange, isTime = false }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onchange} 
            />
            <div style={{ marginLeft: '10px' }}>{isTime ? formatTime(left) : left} / {isTime ? formatTime(right) : right}</div>
        </div>
    );
};

export default TrackProgress;
