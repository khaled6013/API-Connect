import React, { useContext } from 'react'
import { ApiData } from './ContextApi'

const CardList = () => {
    let data = useContext(ApiData)
    return (
        <>
            <div className="w-11/12 mx-auto py-10">
                <div className="flex flex-wrap justify-center gap-5">
                    {data?.map((item) => (
                        <div key={item.id} className="card bg-base-100 w-96 shadow-sm ">
                            <figure>
                                <img src={item.thumbnail} alt={item.title} className='cursor-pointer hover:bg-gray-300'/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default CardList