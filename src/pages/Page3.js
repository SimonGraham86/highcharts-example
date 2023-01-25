import styles from './page.module.css';
import options from './chartOptions3';
import Card from '../UI/Card';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Page3 = () => {
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

export default Page3;