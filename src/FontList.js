import React from 'react'
const FontList = ({ lists, loadMore }) => {

    if (!lists) {
        return <h1 className="display-2 pt-5 text-light">Loading.......</h1>
    }
        return (
            <div className="container py-5" id="top">
                <h1 className="display-3 rounded mb-5 text-center bg-primary text-light p-4">Google Fonts Lists</h1>
                <div className="row">
                    {
                        lists.map((list, i) => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                                <div className="card p-5 mb-3 shadow" style={{ minHeight: "250px" }}>
                                    <span className="pt-2 text-start"> <strong> Font family: </strong> {list.family} </span>
                                    <span className="text-start"> <strong>Font category: </strong> {list.category} </span>
                                    <a href={list.files.regular} className="btn btn-primary btn-block btn-sm mt-4">Download</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="load-more d-flex justify-content-center">
                    <button onClick={loadMore} className="btn btn-primary btn-lg">Load more</button>
                </div>
                <a className="btn btn-primary backBtn" href="#top">Back to top</a>
            </div>
        )
    }

export default FontList
