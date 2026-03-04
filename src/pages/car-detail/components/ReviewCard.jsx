import { useMemo, useState } from "react"

const ReviewCard = ({ reviews }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const getFilledStars = (rating) => {
        const numeric = Number.parseFloat(rating)
        if (Number.isNaN(numeric)) return 4
        return Math.max(0, Math.min(5, Math.floor(numeric)))
    }

    const getRandomDate2025 = (id) => {
        const seed = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
        const monthIndex = seed % 12
        const day = (seed % 28) + 1
        return `${monthNames[monthIndex]} ${day}, 2025`
    }

    const visibleReviews = useMemo(
        () => (isExpanded ? reviews : reviews.slice(0, 2)),
        [isExpanded, reviews]
    )

    return (
        <div className="review-card">
            <div className="review-title">
                <h4>Reviews</h4>
                <span>{reviews.length}</span>
            </div>
            {visibleReviews.map((review) => (
                <div className="review-item" key={review.id}>
                    <img src={review.id.startsWith("r2") ? "/Profill2.png" : "/Profil.png"} alt={review.name} />
                    <div className="review-body">
                        <div className="review-head">
                            <div>
                                <h5>{review.name}</h5>
                                <p>{review.role}</p>
                            </div>
                            <div className="review-stars-wrap">
                                <p className="review-date">{getRandomDate2025(review.id)}</p>
                                <div className="review-stars-row">
                                    <div className="review-stars">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <img
                                                key={index}
                                                src={index < getFilledStars(review.rating) ? "/stair.svg" : "/stairnull.svg"}
                                                alt="star"
                                            />
                                        ))}
                                    </div>
                                    <span className="review-rating">{review.rating}</span>
                                </div>
                            </div>
                        </div>
                        <p>{review.text}</p>
                    </div>
                </div>
            ))}

            {reviews.length > 2 && (
                <button
                    type="button"
                    className={`show-all-reviews${isExpanded ? " expanded" : ""}`}
                    onClick={() => setIsExpanded((prev) => !prev)}
                >
                    {isExpanded ? "Show Less" : "Show All"}
                    <img src="/downsvg.svg" alt="" aria-hidden="true" />
                </button>
            )}
        </div>
    )
}

export default ReviewCard
