import styles from "../styles/helper/Playbook.module.css"

export default function Playbook() {
  return (
    <div className={styles.container}>
        <div className={styles.playbook}>
            <h1>Our Playbook</h1>
        <div className={styles.grid}>
            <div>
                <img src="/images/one.svg"  />
                <h3>Agile</h3>
                <p>Delivering value and customer-centric products requires agility. 
                    At Kuadratik, we are constantly and always striving to meet our customer&#8217;s 
                    needs by iteratively designing and building solutions.</p>
            </div>
            <div>
                <img src="/images/Vector.svg"  />
                <h3>Sprout</h3>
                <p>Nurturing ideas from inception to growth is one of our core. 
                    Ideas are synonymous with seeds, 
                    once a seed is nurtured, cultivated and tendered, it grows.</p>
            </div>
            <div>
                <img src="/images/phonebook.svg"  />
                <h3>Explore</h3>
                <p>Testing hypotheses for solution features provides opportunities to explore various 
                    prototypes and concepts prior to hosting co-creation sessions with our customers.</p>
            </div>
            <div>
                <img src="/images/monitor.svg"  />
                <h3>Curious</h3>
                <p>Launching viable, reliable and trusted solutions. 
                    Yea…we do it right! Once we manage your project or you use our product,
                     be rest assured.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
