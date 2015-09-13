var React = require("react");
var $ = require("jquery");
var Base = require("Base");
var _ =require("underscore");
var Tip = require("Tip");
var UploadImage = React.createClass({
    propTypes : {
        maxCount            : React.PropTypes.number,          //最大上传数
        maxSizeM             : React.PropTypes.number,          //最大M数
        uploadRequestUrl    : React.PropTypes.string,          //上传请求路径
        callback            : React.PropTypes.func             //回调函数
    },
    getDefaultProps : function(){
        return {
            images          : [],
            maxSizeB        : 0,
            hasUpload       : [],
            sequenceID      : 0,
            hasAddCount     : 0,
            hasUploadCount  : 0,
            isUpload        : false,
            isTip           : false,
            tipMessage      : ""
        }
    },
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    componentDidMount : function(){
        $(".image-item").height($(".image-item").width());
        this.props.maxSizeB =  this.props.maxSizeM * 1024 * 1024;
    },
    componentDidUpdate : function(){
        $(".image-item").height($(".image-item").width());
        this.props.isTip = false;
    },
    addImage : function(e){
        Base.pauseEvent(e);
        this.refs.imageFile.getDOMNode().click();
    },
    selectImage : function(evt){
        var file;
        if(this.props.isUpload){
            this.props.isTip = true;
            this.props.tipMessage ="正在上传";
        }
        if(this.props.maxCount<=this.props.hasAddCount&&!this.props.isTip){
            this.props.isTip = true;
            this.props.tipMessage ="最多可上传"+ this.props.maxCount +"张";
        }
        if(!this.props.isTip){
            file = $(".input-file")[0].files[0];
            if(file.size> this.props.maxSizeB){
                this.props.isTip = true;
                this.props.tipMessage ="最多可上传"+ this.props.maxCount +"张";
            }
        }

        if(this.props.isTip){
           this.setState({
               isUpload : !this.state.isUpload
           })
            return;
        }

        //选择图片
        Base.selectImage(file,this.selectOver);
    },
    selectOver : function(imageurl,file){
        var image = new Image();
        image.src= imageurl;
        var imageStyle = {
            "height" :"100%"
        };
        if(image.height>image.width){
            imageStyle = {
                "width":"100%"
            }
        }
        this.props.sequenceID++;
        this.props.hasAddCount++;
        this.props.images.push({
            src :imageurl,
            file : file,
            id : this.props.sequenceID,
            style : imageStyle,
            isUpload : false
        });
        this.setState({
            isUpdate : !this.state.isUpdate
        });
    },
    removeImage : function(sequenceID){
        if(this.props.isUpload){
            return;
        }
        this.props.images=this.props.images.filter(function(value,index){
            return value.id !=sequenceID
        })
        this.props.hasAddCount--;
        this.setState({
            isUpdate : !this.state.isUpdate
        });
    },
    onUpload : function(){
        if(this.props.isUpload){
            return;
        }
        var $that = this;
        this.props.images.forEach(function(value,index){
            if(!value.isUpload){
                Base.uploadImage($that.props.uploadRequestUrl,"file",value.file,$that.uploadOver,value.sequenceID);
            }
        })
    },
    uploadOver : function(result,sequenceID){
        if(result.status){
            this.props.hasUpload.push(result.filename);

            _.find(this.props.images,function(value){
                if(value.sequenceID==sequenceID){
                    value.isUpload = true;
                }
            })

            this.props.hasUploadCount++;
            this.setState({
                isUpdate : !this.state.isUpdate
            });
            if(this.props.hasUploadCount==this.props.hasAddCount){
                if(this.props.callback) {
                    this.props.callback(this.props.hasUpload);
                }
            }
        }
    },
    render : function(){
        var $that = this;
        var imagesElement = this.props.images.map(function(value,index){
            return (
                <div className={"image-item "+(value.isUpload?"uploaded":"")}>
                    <div>
                        <image src={value.src} style={value.style} />
                        <a href="javascript:;" className="delete-image" onClick={function(){
                            {$that.removeImage(value.id)}
                        }}>
                            <i className="fa fa-trash"></i>
                        </a>
                    </div>
                </div>

        )
        });
        var uploadTitle = "上传";
        if(this.props.hasAddCount>0){
            uploadTitle = "("+this.props.hasUploadCount+"/"+this.props.hasAddCount+"上传)"
        }
        var tip = null;
        if(this.props.isTip){
            tip =(
                <Tip isShow={true} message={this.props.tipMessage} timeout={2000} />
            )
        }
        return (
            <section>
                <header>
                <a href="javascript:;" className = "header-back"><i className="fa fa-angle-left fa-2"></i></a>
                <span className="header-title">上传图片</span>
                <div className="nav-uploadimage">
                    <a href="javascript:;" className="btn-uploadimage" onClick={this.onUpload}>{uploadTitle}</a>
                </div>
                </header>
                <div className="upload-container clearfix">
                    <div className="image-item"><a href="javascript:;" className="add-image" onClick={this.addImage}><i className="fa fa-camera"></i></a></div>
                    {imagesElement}
                </div>
                <input onChange={this.selectImage} type="file" ref="imageFile" className="hide input-file" multiple="multiple" accept="image/*" />
                {tip}
            </section>
        )
    }
});

module.exports = UploadImage;