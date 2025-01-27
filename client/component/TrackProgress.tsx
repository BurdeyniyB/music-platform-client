import React from "react";

interface TrackProgressProps {
    left: number;
    right: number;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({ left, right, onchange }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type="range"
                min={left}
                max={right}
                value={left}
                onChange={onchange} 
            />
            <div style={{ marginLeft: '10px' }}>{left} / {right}</div>
        </div>
    );
};

export default TrackProgress;
