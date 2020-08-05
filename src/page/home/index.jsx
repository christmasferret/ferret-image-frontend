
import React from 'react';
import {Link} from 'react-router-dom';

import MUtil from 'util/mm.jsx'

const _mm = new MUtil();

import FileUploader from 'util/file-uploader/index.jsx'

import PageTitle from 'component/page-title/index.jsx';
import './index.scss'
import './animal.css'
import './button.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productCount: 0,
            id: this.props.match.params.pid,
            name: '',
            subtitle: '',
            categoryId: 0,
            parentCategoryId: 0,
            subImages: [],
            price: '',
            stock: '',
            detail: '',
            status: 1 //商品状态1为在售
        }
    }

    componentDidMount() {
        this.loadCount();
    }

    loadCount() {
    }

    onUploadSuccess(res) {
        let subImages = this.state.subImages;
        subImages.push(res);
        this.setState({
            subImages: subImages
        });
    }

    // 上传图片失败
    onUploadError(errMsg) {
        _mm.errorTips(errMsg);
    }

// 删除图片
    onImageDelete(e) {
        let index = parseInt(e.target.getAttribute('index')),
            subImages = this.state.subImages;
        subImages.splice(index, 1);
        this.setState({
            subImages: subImages
        });
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="Ferret Image, free image hosting"/>
                <div className="form-group">

                    {/*<label className="col-md-12 control-label">商品图片</label>*/}

                    {/*<a href="" title="Button push lightblue" className="button btnPush btnLightBlue">Push</a>*/}


                    <div className="btn-container">
                        <FileUploader onSuccess={(res) => this.onUploadSuccess(res)}
                                      onError={(errMsg) => this.onUploadError(errMsg)}/>
                    </div>

                    <div className="images-container">
                        {
                            this.state.subImages.length ? this.state.subImages.map(
                                (image, index) => (
                                    <div className="image-container">
                                        <div className="img-con" key={index}>
                                            <img className="img" src={image.url}/>
                                            <i className="fa fa-close" index={index}
                                               onClick={(e) => this.onImageDelete(e)}></i>
                                        </div>
                                        <div className="img-des">
                                            <p className="img-des-p">{image.url}</p>
                                        </div>
                                    </div>)
                            ) : (
                                <div className="bug">
                                        <div className="bee1">
                                            <div className="eye"></div>
                                        </div>
                                        <div className="bee2">
                                            <div className="wing"></div>
                                            <div className="wing2"></div>
                                        </div>
                                        <div className="black"></div>
                                    </div>
                           )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;