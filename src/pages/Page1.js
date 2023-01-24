import styles from './page.module.css';
import options from './chartOptions';
import Card from '../components/UI/Card';
import ReactEcharts from "echarts-for-react";

const Page1 = () => {
    return (
        <div className={styles.page}>
            {options.map((option) =>
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

export default Page1;