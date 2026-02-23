export const DiamondStar = ({ color = "#C4EF17", size = 24, className = "" }: { color?: string; size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path
            d="M31.8294 63.9998C31.7677 46.3484 17.9887 32.0591 1.00012 32.0591C18.0266 32.0591 31.8294 17.7055 31.8294 -0.000183105C31.8908 17.6512 45.67 31.9405 62.6587 31.9405C45.6319 31.9405 31.8294 46.2941 31.8294 63.9998Z"
            fill={color}
        />
    </svg>
);

export const SparkleIcon = ({ className = "" }: { className?: string }) => (
    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 34C16.467 24.6227 9.09241 17.0315 0 17.0315C9.11269 17.0315 16.5 9.40615 16.5 0C16.5329 9.37729 23.9076 16.9685 33 16.9685C23.8872 16.9685 16.5 24.5939 16.5 34Z"
            fill="#6B7FFF"
        />
    </svg>
);
