/* eslint-disable no-unused-vars */
import './App.css';
import {ResponsiveContainer,LineChart,Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip,
AreaChart, Area, BarChart, Bar} from 'recharts'

const pdata =[
  {
  name:'Python',
  student:13,
  fees:10
},
{
  name:'Java',
  student:15,
  fees:20 
},
{
  name:'JavaScript',
  student:7,
  fees:30
},
{
  name:'C++',
  student:19,
  fees:13
},
{
  name:'C',
  student:23,
  fees:26
},
{
  name:'Html',
  student:27,
  fees:28
},
{
  name:'Ruby',
  student:30,
  fees:33
}
]

function App() {
  return (
    <>
    <h1 className="chart-heading">Line Chart</h1>
    <ResponsiveContainer width={"100%"} aspect={3}>
      <LineChart data={pdata} width={500} height={300} margin={{top:5
      , right:300, left:200, bottom:5}}>
        <CartesianGrid strokeDasharray="2 2"/>
        <XAxis dataKey="name" interval={'preserveStartEnd'} />
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Line dataKey="student" activeDot={{g:7}} />
        <Line dataKey="fees" stroke='red' activeDot={{g:10}} />

      </LineChart>
    </ResponsiveContainer>

    <h1 className='chart-heading'>Area Chart</h1>
    <ResponsiveContainer width={"100%"} aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={pdata}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="fees" stroke="#8884d8" fill="#8884d8" />

        </AreaChart>
      </ResponsiveContainer>


    
    </>
  )
}

export default App;