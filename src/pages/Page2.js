import styles from './page.module.css';
import options from './chartOptions1';
import Card from '../components/UI/Card';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Page2 = () => {
    return (
        <div className={styles.page}>
            <Card className={styles.containerLarge}>
                <Card className={styles.container}>
                    <HighchartsReact highcharts={Highcharts} options={options[0]} />
                </Card>
            </Card>
        </div>
    )
}

export default Page2;