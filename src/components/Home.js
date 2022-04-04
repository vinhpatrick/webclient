import React, { useEffect } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from "./Header"
import Footer from "./Footer"
const Product = () => {
    const RenderProuctItem = () => {

        return (
            <Card className="card-item-hover">
                <Link to="/product/productId">
                    <CardImg src="assets/images/1.jpg" alt='' />
                </Link>
                <CardBody>
                    <CardTitle>Iphone 13 ProMax</CardTitle>
                    <div style={{ display: 'flex' }}>
                        <CardText className="card-price">200000</CardText>
                        <CardText className="card-price-old">400000</CardText>
                    </div>
                </CardBody>
            </Card >
        )
    }




    return (
        <>
            <Header />
            <div className="container">
                <div className="row align-items-start">
                    <header className="section-heading">
                        <h3 className="section-title">Sản phẩm mới</h3>
                    </header>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                </div>
                <div className='view-all-product'>
                    <Link to="/">
                        Xem tất cả sản phẩm
                    </Link>
                </div>
                <div className="row align-items-start">
                    <header className="section-heading">
                        <h3 className="section-title">Sản Phẩm Bán Chạy</h3>
                    </header>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                </div>
                <div className='view-all-product'>
                    <Link to="/">
                        Xem tất cả sản phẩm
                    </Link>
                </div>
                <div className="row align-items-start last-item">
                    <header className="section-heading">
                        <h3 className="section-title">Tìm Kiếm Nhiều Nhất</h3>
                    </header>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderProuctItem />
                    </div>
                </div>
                <div className='view-all-product'>
                    <Link to="/">
                        Xem tất cả sản phẩm
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product;