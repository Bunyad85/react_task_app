const RentalSummary = ({ carName, dailyPrice }) => (
    <aside className="summary-card">
        <h3>Rental Summary</h3>
        <p className="summary-text">
            Prices may change depending on the length of the rental and the price of your rental car.
        </p>

        <div className="summary-car">
            <div className="summary-car-image-wrap">
                <img src="/Look.png" alt={carName || "Car"} />
            </div>
            <div className="summary-car-info">
                <h4>{carName || "Car"}</h4>
                <div className="summary-rating">
                    <div className="stars">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <img
                                key={index}
                                src={index === 4 ? "/stairnull.svg" : "/stair.svg"}
                                alt="star"
                            />
                        ))}
                    </div>
                    <span>440+ Reviewer</span>
                </div>
            </div>
        </div>

        <div className="summary-divider" />

        <div className="summary-row">
            <span>Subtotal</span>
            <strong>{dailyPrice}</strong>
        </div>
        <div className="summary-row">
            <span>Tax</span>
            <strong>$0</strong>
        </div>

        <div className="promo-row">
            <input type="text" placeholder="Apply promo code" />
            <button type="button">Apply now</button>
        </div>

        <div className="summary-total">
            <div>
                <h5>Total Rental Price</h5>
                <p>Overall price rental</p>
            </div>
            <strong>{dailyPrice}</strong>
        </div>
    </aside>
)

export default RentalSummary
