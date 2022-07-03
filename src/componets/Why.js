import styles from "../styles/helper/Why.module.css"

export default function Why() {
  return (
    <div className={styles.container}>
        <div className={styles.why}>
            <div className={styles.text}>
            <h1>Why choose KUADRATIK?</h1>
            <div className={styles.details}>
                <h3>Success Strategy</h3>
                <p>You're looking for results. We've discovered that conducting preliminary research
                     on your organization, rivals, target market, and customer 
                     psychographics is the most effective approach to achieve them. We offer a strategy
                      only once we have a thorough understanding of you and your customers.
                </p>
            </div>
            <div className={styles.details}>
                <h3>Precision Culture</h3>
                <p>You're looking for results. We've discovered that conducting preliminary research
                     on your organization, rivals, target market, and customer psychographics is the most 
                     effective approach to achieve them. We offer a strategy only once we have a thorough 
                     understanding of you and your customers.</p>
            </div>
            <div className={styles.details}>
                <h3>Kuadratik Experts</h3>
                <p>We have a team of resourceful experts that work with passion and purpose 
                    every day, using agile practices to guarantee that the work outputs the greatest 
                    quality and achieves real results.</p>
            </div>
            <div className={styles.details}>
                <h3>Value Delivery</h3>
                <p>
                We just love to create and ship product features that constantly deliver value to customers, 
                leveraging modern technologies and expertise that gives guaranteed success.</p>
            </div>
            <div className={styles.scores}>
            <div className={styles.product}>
                <h4>100k+</h4>
                <p>Product users</p>
            </div >
            <div className={styles.project}>
                <h4>150+</h4>
                <p>Projects completed </p>
            </div>
            <div className={styles.years}>
                <h4>10+</h4>
                <p>Years operational</p>
            </div>
            
            </div>
            </div>
        </div>
    </div>
  )
}
