import { useMemo } from "react"
import { useParams } from "react-router-dom"
import SectionHeader from "./components/SectionHeader"
import PickupDropoffBlock from "./components/PickupDropoffBlock"
import RentalSummary from "./components/RentalSummary"
import { TextField } from "./components/Fields"
import {
    billingFields,
    cardFields,
    cities,
    confirmTexts,
    dropoffDates,
    paymentMethods,
    paymentSteps,
    pickupDates,
    times,
} from "./data/paymentData"
import "./style.scss"

const Payment = ({ cars = [] }) => {
    const { id } = useParams()
    const selectedCar = useMemo(() => cars.find((car) => car.id === id) || cars[0], [cars, id])
    const dailyPrice = selectedCar?.price?.replace("/day", "").trim() || "$0.00"

    return (
        <div className="payment-page">
            <div className="payment-layout">
                <div className="payment-main">
                    <section className="payment-card billing-card">
                        <SectionHeader {...paymentSteps.billing} />
                        <div className="field-grid">
                            {billingFields.map((field) => (
                                <TextField key={field.label} {...field} />
                            ))}
                        </div>
                    </section>

                    <section className="payment-card">
                        <SectionHeader {...paymentSteps.rental} />
                        <div className="pickup-dropoff">
                            <PickupDropoffBlock
                                title="Pick - Up"
                                gridClassName="pickup-grid"
                                cities={cities}
                                dates={pickupDates}
                                times={times}
                            />
                            <PickupDropoffBlock
                                title="Drop - Off"
                                gridClassName="dropoff-grid"
                                cities={cities}
                                dates={dropoffDates}
                                times={times}
                            />
                        </div>
                    </section>

                    <section className="payment-card">
                        <SectionHeader {...paymentSteps.method} />

                        <div className="method-option active">
                            <div className="method-row">
                                <label className="radio-label">
                                    <input type="radio" name="payment-method" defaultChecked />
                                    <span>Credit Card</span>
                                </label>
                                <div className="method-brand cards-brand" aria-hidden="true">
                                    <span className="visa-text">VISA</span>
                                    <span className="mc-icon" />
                                </div>
                            </div>

                            <div className="field-grid">
                                {cardFields.map((field) => (
                                    <TextField key={field.label} {...field} />
                                ))}
                            </div>
                        </div>

                        {paymentMethods.map((method) => (
                            <div className="method-option" key={method.name}>
                                <div className="method-row method-single">
                                    <label className="radio-label">
                                        <input type="radio" name="payment-method" />
                                        <span>{method.name}</span>
                                    </label>
                                    <div className={`method-brand ${method.brandClass}`}>{method.brandText}</div>
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="payment-card">
                        <SectionHeader {...paymentSteps.confirmation} />
                        {confirmTexts.map((text) => (
                            <label className="confirm-check" key={text}>
                                <input type="checkbox" />
                                <span>{text}</span>
                            </label>
                        ))}

                        <button type="button" className="rent-now-btn">Rent Now</button>

                        <div className="safe-note">
                            <img src="/ic-security-safety.svg" alt="security" />
                            <h6>All your data are safe</h6>
                            <p>We are using the most advanced security to provide you the best experience ever.</p>
                        </div>
                    </section>
                </div>

                <RentalSummary carName={selectedCar?.name} dailyPrice={dailyPrice} />
            </div>
        </div>
    )
}

export default Payment
