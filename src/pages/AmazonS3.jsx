import React from 'react'

const AmazonS3 = () => {
    return (
        <div className="p-4  bg-pink-500 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-lg font-bold text-gray-700 mb-2">Redis Example</h2>
                    <div className="h-56 bg-white rounded-lg"></div>
                </div>
                <div>
                    <h2 className="text-lg font-bold text-gray-700 mb-2">Mcrouter Example</h2>
                    <div className="h-56 bg-white rounded-lg"></div>
                </div>
                <div>
                    <h2 className="text-lg font-bold text-gray-700 mb-2">S3 Example</h2>
                    <div className="h-56 bg-white rounded-lg"></div>
                </div>
                <div>
                    <h2 className="text-lg font-bold text-gray-700 mb-2">Endpoint X</h2>
                    <div className="h-56 bg-white rounded-lg"></div>
                </div>
            </div>
        </div>
    )
}

export default AmazonS3