import { dotPulse } from 'ldrs';
import './LoadingDots.css';

export default function LoadingDots() {
    dotPulse.register()
    return (
        <div className="loading-container">
            <l-dot-pulse
                size="43"
                speed="1.3"
                color="white"
            />
        </div>
    )
}