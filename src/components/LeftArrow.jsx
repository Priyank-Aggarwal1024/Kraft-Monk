function LeftArrow(props) {
    const { onClick } = props;

    return (
        <div className="test-left-arrow"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" >
                <path id="test-left-arrow-svg" d="M14.7891 5.96094C14.9297 6.11719 15 6.29688 15 6.5C15 6.70312 14.9297 6.88281 14.7891 7.03906L9.30469 12.5L14.7891 17.9609C14.9297 18.1172 15 18.2969 15 18.5C15 18.7031 14.9297 18.8828 14.7891 19.0391C14.6328 19.1797 14.4531 19.25 14.25 19.25C14.0469 19.25 13.8672 19.1797 13.7109 19.0391L7.71094 13.0391C7.57031 12.8828 7.5 12.7031 7.5 12.5C7.5 12.2969 7.57031 12.1172 7.71094 11.9609L13.7109 5.96094C13.8672 5.82031 14.0469 5.75 14.25 5.75C14.4531 5.75 14.6328 5.82031 14.7891 5.96094Z" />
            </svg>
        </div>
    );
}

export default LeftArrow;