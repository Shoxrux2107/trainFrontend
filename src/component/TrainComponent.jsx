import React, { useEffect } from 'react'
import { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { getTrain, saveTrain, updateTrain } from '../services/TrainService'

const TrainComponent = () => {



    const [number, setNumber] = useState();
    const [index, setIndex] = useState('');
    const [activity, setActivity] = useState('');
    const [numberOfLine, setNumberOfLine] = useState();




    const navigate = useNavigate()
    const { id } = useParams()


    function saveOrUpdateTodo(e) {
        e.preventDefault()

        const train = { number, index, activity, numberOfLine }
        console.log(train);

        if (id) {

            updateTrain(id, train).then((response) => {
                navigate('/trains')
            }).catch(error => {
                console.error(error);
            })

        } else {

            saveTrain(train).then((response) => {
                console.log(response.data)
                navigate('/trains')
            }).catch(error => {
                console.error(error);
            })


        }
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>O'zgartirish</h2>
        } else {
            return <h2 className='text-center'>Poyezd qo'shish</h2>
        }
    }

    useEffect(() => {

        if (id) {
            getTrain(id).then((response) => {
                console.log(response.data)
                setNumber(response.data.number)
                setIndex(response.data.index)
                setActivity(response.data.activity)
                setNumberOfLine(response.data.numberOfLine)
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id])

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Poyezd raqami:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Poyezd raqamini kiriting'
                                    name='raqam'
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Poyezd indeksi:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Poyezd indeksini kiriting'
                                    name='index'
                                    value={index}
                                    onChange={(e) => setIndex(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Harakat turi:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Poyezd harakatini kiriting'
                                    name='activity'
                                    value={activity}
                                    onChange={(e) => setActivity(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Yo'l raqami:</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Yol raqamini kiriting'
                                    name='line'
                                    value={numberOfLine}
                                    onChange={(e) => setNumberOfLine(e.target.value)}
                                >
                                </input>
                            </div>



                            <button className='btn btn-success' onClick={(e) => saveOrUpdateTodo(e)}>Submit</button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TrainComponent