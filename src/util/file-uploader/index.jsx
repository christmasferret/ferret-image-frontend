import React        from 'react';
import FileUpload   from './react-fileupload.jsx';

class FileUploader extends React.Component{
    render(){
        const options={
            baseUrl         :'/image/upload.do',
            fileFieldName   : 'upload_file',
            dataType        : 'json',
            chooseAndUpload : true,
            multiple : true,
            numberLimit : 5, //允许多文件上传时，选择文件数量的限制
            uploadSuccess   : (res) => {
                for (const img of res.data) {
                    this.props.onSuccess(img);
                }
            },
            uploadError     : (err) => {
                this.props.onError(err.message || '上传图片出错啦');
            }
        }
        return (
            <FileUpload options={options}>
                <a className="button btnPush btnLightBlue" ref="chooseAndUpload">Upload</a>
            </FileUpload>
        )           
    }
}
export default FileUploader;