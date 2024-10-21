import { FiArrowDownRight } from 'react-icons/fi';
import '../styles/Congrats.css'
function Congrats() {
    return (
        <>
            <div className="kraft-congrats">
                <h2 className="congrats-heading"><span className="text-black">Join</span> Whatsapp Group</h2>
                <div className="congrats-text">
                    <p className="">Sometimes Notifications get delayed you can join our Orientation group in order to stay updated about everything.</p>
                    <p className="">Join <b>below</b></p>
                </div>
                <div className="congrats-join-button">
                    <p>Join Onboarding Group</p>
                    <FiArrowDownRight size="36" />
                </div>
            </div>
        </>
    );
}

export default Congrats;