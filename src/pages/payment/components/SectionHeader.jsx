const SectionHeader = ({ title, description, step }) => (
    <div className="payment-card-head">
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <span>{step}</span>
    </div>
)

export default SectionHeader
