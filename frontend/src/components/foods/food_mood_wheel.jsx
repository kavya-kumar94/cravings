import React from 'react';
import { Pie } from 'react-chartjs-2';

class Chart extends React.Component {
    render() {
        return (
            <div className="pie">
                <Pie
                data={data}
                width={100}
                height={50}
                options={{maintainAspectRatio: false}}
                />
            </div>
        )
    }
}

export default Chart;