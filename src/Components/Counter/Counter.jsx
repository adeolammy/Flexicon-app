import React, {Fragment, useState}from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import '../Counter/CounterStyle.css'

const Counter = ({ className, ...rest}) => {
	const [viewPortEntered, setViewPortEntered] = useState(false)

	return (
		<Fragment>
			<section className='counter'>
				<div className="counter-row">

					<div className="counter-column">
						<strong data-number='1050'>
							 <CountUp {...rest} start = {viewPortEntered ? null : 0} end ={1050}>

								{({countUpRef}) => {
									return (
										<VisibilitySensor
										active = {!viewPortEntered} 
										onChange = {isVisible => {
											if (isVisible) {
												setViewPortEntered(true);
											}
										}}
										delayedCall
										>
											<span className='number' ref={countUpRef}/>

										</VisibilitySensor>
									)
								}}

							 </CountUp> 
						</strong> <h1>+</h1>
						<span> Projects</span>
					</div>
					
					<div className="counter-column">
						<strong data-number='375'>
							 <CountUp {...rest} start = {viewPortEntered ? null : 0} end ={375}>

								{({countUpRef}) => {
									return (
										<VisibilitySensor
										active = {!viewPortEntered}
										onChange = {isVisible => {
											if (isVisible) {
												setViewPortEntered(true);
											}
										}}
										delayedCall
										>
											<span className='number' ref={countUpRef}/>

										</VisibilitySensor>
									)
								}}

							 </CountUp>
						</strong> <h1>+</h1>
						<span>Clients</span>
					</div>


					<div className="counter-column">
						<strong data-number='8' >
							 <CountUp {...rest} start = {viewPortEntered ? null : 0} end ={8}>

								{({countUpRef}) => {
									return (
										<VisibilitySensor
                                            active = {!viewPortEntered}
                                            onChange = {isVisible => {
                                                if (isVisible) {
                                                    setViewPortEntered(true);
                                                }
                                            }}
                                            delayedCall
                                            >
											<span className='number' ref={countUpRef} />

										</VisibilitySensor>
									)
								}}
                                    
							 </CountUp>
                          
						</strong><h1>+</h1>
						<span>  Counteries</span>
					</div>
					

				</div>
			</section>
		</Fragment>
	)
}
export default Counter

















