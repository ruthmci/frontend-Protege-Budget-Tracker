import React from 'react';



class ImageUpload extends React.Component {
  State = {}

  handleUpload = (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    let config = {
      headers: {
        'Content-Type': 'application/x-www-fore-urlencoded'
      }
    }
    axios.post('http://localhost:5000/upload', formData,config)
    .then((res) => {
      const image = res.data.secure_url
      this.setState({ image })
    })
    .catch((err) => {
      console.log(err)
    })
  }
  render() {
    const { image } = this.state
    return (
      <>
      {image && <img src={image} alt="cloudinary-upload"/>}
      <form>
        <input type="file" name="image-upload" onChange={this.handleUpload}/>
      </form>
      </>
    )
  }
}

export default ImageUpload