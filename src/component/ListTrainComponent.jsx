import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteTrain, getAllTrains } from '../services/TrainService';

const ListTrainComponent = () => {

    const [trains, setTrains] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        listTrains();
    }, [])

    function listTrains() {
        getAllTrains().then((response) => {
            setTrains(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function malumotQoshish() {
        navigate('/add-train')

    }
    function updateTrain(id) {
        console.log(id)
        navigate(`/update-train/${id}`)
    }
    function removeTrain(id) {
        deleteTrain(id).then((response) => {
            listTrains();
        }).catch(error => {
            console.error(error)
        })
    }






    return (
        <div className='container'>
            <h2 className='text-center'>Poyezdlar jadvali</h2>
            <button className='btn btn-primary mb2' onClick={malumotQoshish}>Malumot qoshish</button>

            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Poyezd raqami</th>
                            <th>Index</th>
                            <th>Harakat nomi</th>
                            <th>Yo'l raqami</th>
                            <th>Vaqti</th>
                            <th>Amallar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trains.map(train =>
                                <tr key={train.id}>
                                    <td>{train.number}</td>
                                    <td>{train.index}</td>
                                    <td>{train.activity}</td>
                                    <td>{train.numberOfLine}</td>
                                    <td>{train.localDateTime}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => updateTrain(train.id)}>O'zgartirish</button>
                                        <button className='btn btn-danger' onClick={() => removeTrain(train.id)} style={{ marginLeft: "10px" }}>O'chirish</button>
                                    </td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListTrainComponent