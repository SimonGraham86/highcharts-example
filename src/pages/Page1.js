import styles from './page.module.css';
import options from './chartOptions';
import Card from '../UI/Card';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Page1 = () => {
    return (
        <div className={styles.page}>
            {options.slice(0,3).map((option, index) =>
                <Card key={index.toString()} className={styles.container}>
                    <HighchartsReact 
                        highcharts={Highcharts} 
                        options={option}
                        containerProps={{ style: { height: "100%" } }}
                    />
                </Card>
            )}
            <Card className={styles.containerMedium}>
                <HighchartsReact 
                    highcharts={Highcharts} 
                    options={options[3]}
                    containerProps={{ style: { height: "100%" } }}
                />
            </Card>
            <Card className={styles.containerLarge}>
                <HighchartsReact 
                    highcharts={Highcharts} 
                    options={options[4]}
                    containerProps={{ style: { height: "100%" } }}
                />
            </Card>
        </div>
    )
}

export default Page1;