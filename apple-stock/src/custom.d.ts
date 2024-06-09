import { ChartTypeRegistry } from 'chart.js';
import { CandlestickDataPoint } from 'chartjs-chart-financial';

declare module 'chart.js' {
    interface ChartTypeRegistry {
        candlestick: {
            chartOptions: typeof Chart.defaults;
            datasetOptions: typeof Chart.defaults;
            defaultDataPoint: CandlestickDataPoint;
            metaExtensions: Record<string, never>;
            parsedDataType: CandlestickDataPoint;
        };
    }
}
