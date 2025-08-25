import React from "react";
import PropTypes from "prop-types";

// Definimos el componente SecondsCounter dentro de este archivo

const SecondsCounter = ({ seconds, digits = 6 }) => { // 6 cajitas

	const numeroConCeros = String(seconds).padStart(digits, "0"); // string con ceros a la izquierda
	const listaDeDigitos = numeroConCeros.split(""); // array de dígitos

	return (
		<div className="counter-wrapper">
			
			{/*cajita icon*/}
			<div className="digit-box icon-box">
				<i className="fa-solid fa-clock"></i>
			</div>
			
			{/*pinta el digito*/}
			{listaDeDigitos.map((digito, i) => (
				<div className="digit-box" key={i}>
					{digito}
				</div>
			))}
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number.isRequired,
	digits: PropTypes.number,
};

export default SecondsCounter;
