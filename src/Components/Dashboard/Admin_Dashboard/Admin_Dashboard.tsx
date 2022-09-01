import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import student from '../../../asset/student.png';
import cap from '../../../asset/cap.png'
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from 'recharts';
import { useContext } from 'react';
import { TimeContext } from '../../../App';


interface Data {
    "month": string
    "investment": number
    "sell": string
    "revenue": number
}

interface Student {
    _id?: string
    email?: string
    name?: string
    role?: string
    student?: string
    district?: string
    division?: string
    street?: string
    enroll?: string
    phone?: string
    image?: string
}

const Admin_Dashboard = () => {
    const [currentDate, Current_time] = useContext(TimeContext);
    const percentage = 66;
    const percentage2 = 88;
    const chartData: Data[] = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": "Fr",
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": "SA",
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": "Su",
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": "Mo",
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": "Tu",
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": "Th",
            "revenue": 61000
        }
    ]

    const [students, setStudents] = useState<Student[]>([]);
    const [task, setTask] = useState<Object[]>([])


    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/alltasks')
            .then(res => res.json())
            .then(data => setTask(data))
    }, []);
    return (
        <div className='p-10'>
            <div className='flex md:justify-between md:flex-row flex-col'>
                <div className='mb-10 text-center'>
                    <h1 className='text-4xl font-bold dark:text-slate-50'>Dashboard</h1>
                </div>
                <div className="card md:w-96 bg-white dark:bg-[#182233] rounded-full shadow-xl">
                    <div className="text-center dark:text-slate-50">
                        <h2 className="text-center text-lg font-bold">Period </h2>
                        <p>29/5/2022- 29/12/2022</p>
                        <p>{currentDate}</p>
                        <p>{Current_time}</p>
                    </div>
                </div>
            </div>
            <div className="grid gap-x-8 gap-y-8 lg:grid-cols-2 mt-14">
                {/* 1st stat  */}
                <div className="stats shadow p-3 bg-white dark:bg-[#182233] text-black dark:text-slate-50">

                    <div className="stat">
                        <div className='text-4xl font-bold mb-3'>{students.length}</div>

                        <div className=" text-[18px] font-semibold ">Total Students</div>

                        <div className=" text-[16px] font-semibold"><span className='text-green-500'>+21% </span>than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <img src={student} alt="" />
                        </div>

                    </div>

                </div>
                {/* 2nd state  */}
                <div className="stats shadow p-3 bg-white dark:bg-[#182233] text-black dark:text-slate-50">

                    <div className="stat">
                        <div className='text-4xl font-bold mb-3'>2</div>

                        <div className=" text-[18px] font-semibold text-black dark:text-slate-50">Total Teacher</div>

                        <div className=" text-[16px] font-semibold"><span className='text-red-600'>-2% </span>than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <img src={cap} alt="" />
                        </div>

                    </div>

                </div>
                {/* 3rd stat  */}
                <div className="stats shadow p-3 bg-white dark:bg-[#182233] text-black dark:text-slate-50">

                    <div className="stat flex">
                        <div className='' style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`}
                                styles={buildStyles({




                                    // Text size
                                    textSize: '16px',



                                    // Colors
                                    pathColor: `#ff0000, ${percentage / 100})`,
                                    // textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    // backgroundColor: '#3e98c7',
                                })}
                            />
                        </div>
                        <div>
                            <div className='text-4xl font-bold my-3'>25</div>
                            <h3 className='text-lg font-semibold'>Session</h3>
                        </div>



                    </div>


                </div>
                {/* 4th state  */}
                <div className="stats shadow p-3 bg-white dark:bg-[#182233] text-black dark:text-slate-50">

                    <div className="stat flex">
                        <div className='' style={{ width: 100, height: 100 }}>
                            <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
                        </div>
                        <div>
                            <div className='text-4xl font-bold my-3'>{task.length}</div>
                            <h3 className='text-lg font-semibold'>Assestment</h3>
                        </div>



                    </div>


                </div>
            </div>
            {/* school perfomance chart  */}
            <div className="card lg:card-side shadow-xl my-5 bg-white dark:bg-[#182233] text-black dark:text-slate-50">

                <div className="card-body">
                    <h2 className='card-title font-semibold text-lg block'>School Perfomance</h2>

                    <div className="card-actions w-[100%]">

                        <AreaChart
                            width={500}
                            height={400}
                            data={chartData}
                            margin={{
                                top: 10,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="sell" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>

                    </div>
                </div>
            </div>
            {/* undpaid students */}
            <div className="card lg:card-side shadow-xl bg-white dark:bg-[#182233] text-black dark:text-slate-50">

                <div className="card-body">
                    <h2 className="card-title">Unpaid Students</h2>
                    <p className='text-slate-500 text-[16px]'>Total 230</p>
                    <div className="card-actions ">
                        <div className="overflow-x-auto w-full bg-white dark:bg-[#182233] text-black dark:text-slate-50">
                            <table className="table w-full bg-white dark:bg-[#182233] text-black dark:text-slate-50">

                                <thead>
                                    <tr>
                                        <th>
                                            Enable
                                        </th>
                                        <th>Name</th>
                                        <th>Batch</th>
                                        <th>Fees</th>

                                    </tr>
                                </thead>
                                <tbody className='bg-white dark:bg-[#182233] text-black dark:text-slate-50'>

                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-green-600 text-[18px]">
                                            1st
                                        </td>
                                        <td>
                                            7000
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Brice Swyre</div>
                                                    <div className="text-sm opacity-50">China</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-green-600 text-[18px]">
                                            1st
                                        </td>
                                        <td>
                                            7000
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Marjy Ferencz</div>
                                                    <div className="text-sm opacity-50">Russia</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-green-600 text-[18px]">
                                            1st
                                        </td>
                                        <td>
                                            7000
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Yancy Tear</div>
                                                    <div className="text-sm opacity-50">Brazil</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-green-600 text-[18px]">
                                            1st
                                        </td>
                                        <td>
                                            7000
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin_Dashboard;