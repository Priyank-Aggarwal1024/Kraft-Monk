
function RightArrow(props) {
    const { className, style, onClick } = props;
    return (

        <div className="test-right-arrow"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path id="test-right-arrow-svg" d="M9.21094 5.96094C9.07031 6.11719 9 6.29688 9 6.5C9 6.70312 9.07031 6.88281 9.21094 7.03906L14.6953 12.5L9.21094 17.9609C9.07031 18.1172 9 18.2969 9 18.5C9 18.7031 9.07031 18.8828 9.21094 19.0391C9.36719 19.1797 9.54688 19.25 9.75 19.25C9.95312 19.25 10.1328 19.1797 10.2891 19.0391L16.2891 13.0391C16.4297 12.8828 16.5 12.7031 16.5 12.5C16.5 12.2969 16.4297 12.1172 16.2891 11.9609L10.2891 5.96094C10.1328 5.82031 9.95312 5.75 9.75 5.75C9.54688 5.75 9.36719 5.82031 9.21094 5.96094Z" />
            </svg>
        </div>
    );
}

export default RightArrow;