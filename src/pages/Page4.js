import styles from './page.module.css';
import options from './chartOptions4';
import Card from '../UI/Card';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

const Page4 = () => {
    return (
        <div className={styles.page}>
            <Card className={styles.containerHuge}>
                <HighchartsReact 
                    highcharts={Highcharts} 
                    options={options[0]}
                    containerProps={{ style: { height: "100%" } }}
                />
            </Card>
        </div>
    )
}

export default Page4;