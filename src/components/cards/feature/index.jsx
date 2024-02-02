import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ icon, count, text }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <div className={`card bg-orange-3 rounded text-black mx-auto group transform transition-transform duration-300 hover:scale-105 ${inView ? 'in-view' : ''}`} ref={ref}>
            <div className="card-body text-center">
                <div>
                    <span className="badge badge-xl bg-orange-2 border-none text-black text-3xl">
                        {icon}
                    </span>
                </div>
                <h2 className="card-header mx-auto">
                    {inView && <CountUp start={0} end={count} duration={2} />}
                    {' +'}
                </h2>
                <p className="text-black">{text}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
