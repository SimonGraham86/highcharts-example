import styles from './page.module.css';
import options from './chartOptions2';
import Card from '../components/UI/Card';
import ReactEcharts from "echarts-for-react";

const Page2 = () => {
    return (
        <div className={styles.page}>
            <Card className={styles.containerLarge}>
                <ReactEcharts
                    option={options[0]}
                    style={{ width: "100%", height: "100%" }}
                ></ReactEcharts>
            </Card>
            <Card className={styles.containerMedium}>
                <ReactEcharts
                    option={options[1]}
                    style={{ width: "100%", height: "100%" }}
                ></ReactEcharts>
            </Card>
            {options.slice(2).map((option) =>
                <Card className={styles.container}>
                    <ReactEcharts
                        option={option}
                        style={{ width: "100%", height: "100%" }}
                    ></ReactEcharts>
                </Card>
            )}
        </div>
    )
}

export default Page2;