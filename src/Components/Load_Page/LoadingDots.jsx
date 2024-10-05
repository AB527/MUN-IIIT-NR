import { dotPulse } from 'ldrs';
import './LoadingDots.css';

export default function LoadingDots() {
    dotPulse.register()
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <l-dot-pulse
                size="43"
                speed="1.3"
                color="white"
            />
        </div>
    )
}