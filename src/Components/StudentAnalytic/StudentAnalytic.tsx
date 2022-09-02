import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import auth from '../../firebase.init';
import StudentMark from './StudentMark';


interface CardData {
    month: string;
    investment: number;
    sell: number;
    revenue: number;
}

interface Mark {
    _id: string
    mark: string
    scriptfeedback: string
    email: string
    taskDescription: string
    taskName: string
    deadline: string
    taskNo: string
    feedbackDate: string
    feedbackHour: string
}


const studentAnalytic = () => {
    const [user] = useAuthState(auth)
    const email: string | null | undefined = user?.email
    const [marks, setMarks] = useState<Mark[]>([]);

    useEffect(() => {
        fetch(`https://cryptic-stream-86241.herokuapp.com/allMarks/${email}`)
            .then(res => res.json())
            .then(data => setMarks(data))
    }, [email])


    const chartData: CardData[] = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <>
            <div className='ml-5 mt-20'>
                <h2 className='font-semibold text-lg mb-5 text-center text-primary dark:text-slate-50'>Mark distribution</h2>
                <table className="mx-auto text-left  dark:text-slate-50 border dark:border-[#293241]">

                    <thead className='bg-gray-200 dark:bg-[#182233]'>
                        <tr>
                            <th className='p-3'>Serial</th>
                            <th className='p-3'>Task Name</th>
                            <th className='p-3'>Task no.</th>
                            <th className='p-3'>Mark</th>
                            <th className='p-3'>Feedback</th>
                            <th className='p-3'>Mark Upadate date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            marks?.map((singleMark, index) => <StudentMark

                                key={singleMark._id}
                                singleMark={singleMark}
                                index={index}


                            ></StudentMark>)
                        }


                    </tbody>


                </table>
            </div>

            <div className='my-5 flex flex-wrap'>
                <div className="grid gap-x-8 gap-y-8 lg:grid-cols-2 mt-14 mx-auto ">

                    <div className='box-content border-4 rounded-lg p-5 text-primary dark:text-slate-50'>
                        <h2 className='text-center font-semibold text-lg'>Attendence</h2>
                        <LineChart width={300} height={350} data={chartData}>
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>

                    </div>
                    <div className='box-content border-4 text-primary dark:text-slate-50'>
                        <h2 className='font-semibold text-lg text-center'>Perfomance</h2>
                        <AreaChart
                            width={300}
                            height={350}
                            data={chartData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="sell" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </div>
                    {/* <div className='ml-5'>
                    <h2 className='font-semibold text-lg'>Mark distribution</h2>
                    <PieChart width={500} height={400}>
                        <Pie data={chartData} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={chartData} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </div> */}
                </div>

            </div>
        </>
    );
};

export default studentAnalytic;