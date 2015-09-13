var React = require("react");
var $ = require("jquery");
var Base = require("Base");
var _ =require("underscore");
var UploadImage = React.createClass({
    getDefaultProps : function(){
        return {
            images          : [],
            hasUpload       : [],
            sequenceID      : 0,
            hasAddCount     : 0,
            hasUploadCount  : 0,
            isUpload        : false
        }
    },
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    componentDidMount : function(){
        $(".image-item").height($(".image-item").width());
    },
    componentDidUpdate : function(){
        $(".image-item").height($(".image-item").width());
    },
    addImage : function(e){
        Base.pauseEvent(e);
        this.refs.imageFile.getDOMNode().click();
    },
    selectImage : function(evt){
        if(this.props.isUpload){
            return;
        }
        var file = $(".input-file")[0].files[0];
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
        var $that = this;
        this.props.images=this.props.images.filter(function(value,index){
            if(value.id==sequenceID&&value.isUpload){
                $that.props.hasUploadCount--;
            }
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
            if(!value.isUpload)
                Base.uploadImage($that.props.uploadRequestUrl,"file",value.file,$that.uploadOver,value.sequenceID);
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
            </section>
        )
    }
});

module.exports = UploadImage;