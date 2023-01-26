import styles from './page.module.css';
import options from './chartOptions2';
import Card from '../UI/Card';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Page2 = () => {
    return (
        <div className={styles.page}>
            <Card className={styles.containerLarge}>
                <HighchartsReact 
                    highcharts={Highcharts} 
                    options={options[0]}
                    containerProps={{ style: { height: "100%" } }}
                />
            </Card>
            <Card className={styles.containerMedium}>
                <HighchartsReact 
                    highcharts={Highcharts} 
                    options={options[1]}
                    containerProps={{ style: { height: "100%" } }}
                />
            </Card>
            {options.slice(2).map((option, index) =>
                <Card key={index} className={styles.container}>
                    <HighchartsReact 
                        highcharts={Highcharts} 
                        options={option}
                        containerProps={{ style: { height: "100%" } }}
                    />
                </Card>
            )}
        </div>
    )
}

export default Page2;