    import React, { Component } from 'react'
    import AppStore from '../store/AppStore'
    import '../assets/css/bootstrap.css'
    
    import "../../node_modules/video-react/dist/video-react.css"; // import css
    import { Player } from "video-react"
  

    export default class VideoUploader extends Component {
      constructor(props){
        super(props)

        this.state = {
          file: '',
          imagePreviewUrl: ''
        }

        this.handleImageChange = this.handleImageChange.bind(this)
        
      }      

      
      handleImageChange(e){
        e.preventDefault()


        const file = e.target.files[0];
                  

        const data = new FormData();
        data.append('file', file)
        data.append("data", "mp4");
        const requestOptions = {
          method: 'POST',
          headers: {"Content-Type": "multipart/form-data"},
          body: data
      };
      fetch('http://127.0.0.1:8080/convert', {method: 'POST', headers: {/*"Content-Type": "multipart/form-data",*/ Accept: 'blob'/*, boundary:'2'*/},
      body: data})
      .then(res => {
        return res.blob();
    }).then(blob =>{
            if (typeof window.navigator.msSaveBlob === "function") {
              // If it is IE that support download blob directly.
              window.navigator.msSaveBlob(blob);
            } else {
              var fileoutput = blob; //video returned as blob object, defined in utils/API.js
              fileoutput.lastModifiedDate = new Date();
              fileoutput.name = "intro.mp4";
              // const link = document.createElement("a");
              // link.href = window.URL.createObjectURL(blob);
              // link.download = "output." + this.state.formatvalue;
              // // document.body.appendChild(link);
              // // link.click();
              // // this.setState({
              // //   uploadedfile: null,
              // //   convertbuttontext: "Convert Video",
              // //   formatvalue: "",
              // // });
              let reader = new FileReader()
        // var outFilename = "Into.mp4";        


        reader.onloadend = async () => {                   
    

          
          this.setState({
            file: fileoutput,
            imagePreviewUrl: reader.result
          })
        }

        reader.readAsDataURL((fileoutput))
        AppStore.updateVideoIntro(fileoutput)
              
            }


          })
        
      }

      render(){
        const {imagePreviewUrl} = this.state
        const preview = imagePreviewUrl ? <Player
        playsInline
        src={imagePreviewUrl}
        fluid={false}
        width={480}
        height={272}
    /> :
          <div>Please Upload your Portfolio Video</div>

        return <div>
          <input type="file" onChange={this.handleImageChange} />
          {preview}
        </div>
      }
    }