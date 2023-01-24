import styles from './page.module.css';
import options from './chartOptions';
import Card from '../components/UI/Card';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Page1 = () => {
    return (
        <div className={styles.page}>
            {options.map((option) =>
                <Card className={styles.container}>
                    <HighchartsReact highcharts={Highcharts} options={option} />
                </Card>
            )}
        </div>
    )
}

export default Page1;