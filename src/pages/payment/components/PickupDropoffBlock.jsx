import { SelectField } from "./Fields"

const PickupDropoffBlock = ({ title, gridClassName, cities, dates, times }) => (
    <>
        <div className={`pickup-title ${title === "Drop - Off" ? "dropoff-title" : ""}`}>
            <span className="dot" />
            <h4>{title}</h4>
        </div>
        <div className={`field-grid ${gridClassName}`}>
            <SelectField label="Locations" placeholder="Select your city" options={cities} />
            <SelectField label="Date" placeholder="Select your date" options={dates} />
            <SelectField label="Time" placeholder="Select your time" options={times} />
        </div>
    </>
)

export default PickupDropoffBlock
