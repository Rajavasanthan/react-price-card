import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

Card.propTypes = {
  card: {
    plan: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: {
      users: PropTypes.number.isRequired,
      storage: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      help: PropTypes.bool.isRequired,
    },
  },
};

function Card({ card }) {
  return (
    <div className="col">
      <div className={`card mb-4 rounded-3 shadow-sm ${card.plan == 'Enterprise' && 'border-primary'}`}>
        <div className={`card-header py-3 ${card.plan == 'Enterprise' && 'text-bg-primary border-primary'}`}>
          <h4 className="my-0 fw-normal">{card.plan}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            ${card.price}
            <small className="text-body-secondary fw-light">/mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            {card.features.map((feature, index) => {
              return (
                <li key={index}>
                  {feature.enable ? (
                    <span>
                      <FontAwesomeIcon icon={faCheck} /> {feature.name}
                    </span>
                  ) : (
                    <del>
                      <FontAwesomeIcon icon={faXmark} />
                      {feature.name}
                    </del>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={`w-100 btn btn-lg ${
              card.plan == "Free" && "btn-outline-primary"
            } ${card.plan == "Pro" && "btn-primary"}
             ${card.plan == "Enterprise" && "btn-primary"}`}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
